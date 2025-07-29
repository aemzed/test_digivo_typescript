import { generateOrder } from "../services/ordersService";

const generate50Orders = async () => {
    const total = 50;
    let success = 0;

    for (let i = 0; i < total; i++) {
        try {
            const order = await generateOrder();
            console.log(`✅ Order #${i + 1}:`, order);
            success++;
        } catch (err: any) {
            console.error(`❌ Error on order #${i + 1}:`, err.message);
        }
    }

    console.log(`\nDone. ${success}/${total} orders berhasil dibuat.`);
};

generate50Orders();
