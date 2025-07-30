import axios from "axios";
import { createHmac } from "crypto";
import { connectDB, getDB } from "../db";

export const notifyWebhooks = async (payload: object) => {
    await connectDB();
    const db = getDB();

    const [hooks] = await db.query(`SELECT * FROM webhooks`);
    const jsonPayload = JSON.stringify(payload);

    for (const hook of hooks) {
        const signature = createHmac("sha256", hook.secret_key)
            .update(jsonPayload)
            .digest("hex");

        try {
            const res = await axios.post(hook.url, jsonPayload, {
                headers: {
                    "X-Signature": signature,
                    "Content-Type": "application/json"
                }
            });

            await db.query(`
                INSERT INTO webhook_logs (webhook_id, payload, status_code, success, attempt, next_attempt_at, created_at)
                VALUES (?, ?, ?, TRUE, 1, NULL, NOW())`,
                [hook.id, jsonPayload, res.status]
            );
        } catch (err) {
            const nextAttempt = new Date(Date.now() + 5 * 60 * 1000);
            await db.query(`
                INSERT INTO webhook_logs (webhook_id, payload, success, attempt, next_attempt_at, created_at)
                VALUES (?, ?, FALSE, 1, ?, NOW())`,
                [hook.id, jsonPayload, nextAttempt]
            );
        }
    }
};
