import { ClientSession } from "mongodb";
import { getClient, getDB } from "../db";
import { generateOrderId } from "../utils/idUtils";

export type CheckoutItem = { produk_id: string; qty: number };

export async function checkoutService(email: string, items: CheckoutItem[]) {
    const client = getClient();
    const db = getDB();

    if (!email || !Array.isArray(items) || items.length === 0) {
        throw new Error("email & items wajib diisi");
    }

    const colProduk = db.collection("produk");
    const colOrder = db.collection("order");
    const colCart  = db.collection("shopping_cart");

    const session: ClientSession = client.startSession();

    try {
        const result = await session.withTransaction(async () => {
            for (const item of items) {
                if (!item.produk_id || !item.qty || item.qty <= 0) {
                    throw new Error(`Item invalid: ${JSON.stringify(item)}`);
                }

                const upd = await colProduk.updateOne(
                    { produk_id: item.produk_id, jumlah_stok: { $gte: item.qty } },
                    {
                        $inc: { jumlah_stok: -item.qty, total_terjual: item.qty },
                        $set: { updated_at: new Date() }
                    },
                    { session }
                );

                if (upd.matchedCount !== 1 || upd.modifiedCount !== 1) {
                    throw new Error(`Stok tidak cukup / produk tidak ditemukan: ${item.produk_id}`);
                }
            }

            const orderDoc = {
                order_id: generateOrderId(),
                email,
                items: items.map(({ produk_id, qty }) => ({ produk_id, qty })),
                tanggal_order: new Date(),
                created_at: new Date(),
                updated_at: new Date()
            };

            await colOrder.insertOne(orderDoc, { session });

            // 3) Hapus item terkait dari shopping_cart
            const produkIds = items.map(i => i.produk_id);
            await colCart.deleteMany({ email, produk_id: { $in: produkIds } }, { session });

            return orderDoc;
        }, {
            // Opsi transaksi – sesuaikan kebutuhan
            readConcern: { level: "local" }, // bisa "snapshot" jika perlu konsistensi baca kuat
            writeConcern: { w: "majority" },
            readPreference: "primary"
        });

        return result; // orderDoc
    } finally {
        await session.endSession();
    }
}
