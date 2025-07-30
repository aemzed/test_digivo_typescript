import mysql from "mysql2/promise";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let db: any;
let mongoClient: MongoClient;

export async function connectDB() {
    if (process.env.DB_TYPE === "mysql") {
        if (!db) {
            db = mysql.createPool({
                host: process.env.MYSQL_HOST || "localhost",
                user: process.env.MYSQL_USER || "root",
                password: process.env.MYSQL_PASS || "",
                database: process.env.MYSQL_DB || "testdigivo",
                port: Number(process.env.MYSQL_PORT) || 3306,
            });
            console.log("✅ Connected to MySQL");
        }
    } else if (process.env.DB_TYPE === "mongodb") {
        if (!mongoClient) {
            mongoClient = new MongoClient(process.env.MONGO_URI!);
            await mongoClient.connect();
            db = mongoClient.db(process.env.MONGO_DB || "db_toko");
            console.log("✅ Connected to MongoDB");
        }
    }
    return db;
}

export function getDB() {
    if (!db) throw new Error("❌ Database belum terkoneksi. Panggil connectDB() dulu!");
    return db;
}

export function getClient(): MongoClient {
    if (process.env.DB_TYPE !== "mongodb") {
        throw new Error("getClient() hanya bisa dipanggil kalau DB_TYPE=mongodb");
    }
    if (!mongoClient) throw new Error("❌ MongoClient belum terkoneksi!");
    return mongoClient;
}
