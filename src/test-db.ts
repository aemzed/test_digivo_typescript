import { connectDB, getDB } from "./db";

async function testConnection() {
    try {
        await connectDB();
        const db = getDB();
        if (process.env.DB_TYPE === "mysql") {
            const [rows] = await db.query("SELECT 1");
            console.log("✅ Koneksi MySQL OK", rows);
        } else {
            const collections = await db.listCollections().toArray();
            console.log("✅ Koneksi MongoDB OK, collections:", collections);
        }

        process.exit(0);
    } catch (error) {
        console.error("❌ Koneksi database gagal", error);
        process.exit(1);
    }
}

testConnection();
