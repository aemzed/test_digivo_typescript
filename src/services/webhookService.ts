import axios from "axios";
import * as crypto from "crypto";
import { db } from "../db";

export const notifyWebhook = async (orderId: string, statusBaru: string) => {
    const [webhooks] = await db.query(`SELECT * FROM webhooks`);

    const [orders]: [any[], any] = await db.query(`SELECT * FROM orders WHERE id = ?`, [orderId]);
    const order = orders[0];

    if (!order) throw new Error(`Order ${orderId} tidak ditemukan`);

    const payloadObj = {
        orderId: order.id,
        produkId: order.produk_id,
        status: statusBaru,
        timestamp: new Date().toISOString(),
    };

    const payload = JSON.stringify(payloadObj);

    for (const webhook of webhooks as any[]) {
        const signature = crypto
            .createHmac("sha256", webhook.secret_key)
            .update(payload)
            .digest("hex");

        try {
            const res = await axios.post(webhook.url, payload, {
                headers: {
                    "X-Signature": signature,
                    "Content-Type": "application/json"
                }
            });

            await db.query(`
                INSERT INTO webhook_logs (webhook_id, payload, success, status_code, attempt, next_attempt_at)
                VALUES (?, ?, TRUE, ?, 1, NULL)
            `, [webhook.id, payload, res.status]);

        } catch (err: any) {
            const nextAttempt = new Date(Date.now() + 5 * 60 * 1000); // 5 menit
            await db.query(`
                INSERT INTO webhook_logs (webhook_id, payload, success, status_code, attempt, next_attempt_at)
                VALUES (?, ?, FALSE, ?, 1, ?)
            `, [webhook.id, payload, err.response?.status || 500, nextAttempt]);
        }
    }
};
