import { db } from "./db";

async function testConnection() {
    try {
        const [rows] = await db.query("SELECT 1");
        console.log("Koneksi database OK", rows);
        process.exit(0);
    } catch (error) {
        console.error("Koneksi database gagal", error);
        process.exit(1);
    }
}

testConnection();