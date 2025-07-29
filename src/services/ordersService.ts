import { db } from "../db";
import { generateUnicCode } from "../utils/unicCode";

let usedUnicCode = new Set<number>();

export const generateOrder = async () => {
    if (usedUnicCode.size >= 10) usedUnicCode.clear();

    const kodeUnik = generateUnicCode(usedUnicCode);
    usedUnicCode.add(kodeUnik);

    const produkId = `PRD-${Math.floor(Math.random() * 1000)}`;
    const namaProduk = "Produk A";
    const harga = 299000;
    const status = "pending";
    const tanggal = new Date();

    await db.query(
        `INSERT INTO orders (produk_id, nama_produk, harga, kode_unik, status, tanggal)
     VALUES (?, ?, ?, ?, ?, ?)`,
        [produkId, namaProduk, harga, kodeUnik, status, tanggal]
    );

    return {
        produkId,
        namaProduk,
        harga,
        kodeUnik,
        status,
        tanggal,
    };
};
