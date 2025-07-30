import axios from "axios";
import crypto from "crypto";
import { connectDB, getDB } from "../db";

export const retryFailedWebhooks = async () => {
    await connectDB();
    const db = getDB();

    const [logs] = await db.query(`
        SELECT * FROM webhook_logs
        WHERE success = FALSE AND attempt < 3 AND next_attempt_at <= NOW()
    `);

    for (const log of logs as any[]) {
        const [[hook]] = await db.query(`SELECT * FROM webhooks WHERE id = ?`, [log.webhook_id]);
        const signature = crypto
            .createHmac("sha256", hook.secret_key)
            .update(log.payload)
            .digest("hex");

        try {
            const res = await axios.post(hook.url, log.payload, {
                headers: { "X-Signature": signature, "Content-Type": "application/json" }
            });

            await db.query(`UPDATE webhook_logs SET success = TRUE, status_code = ?, attempt = attempt + 1 WHERE id = ?`,
                [res.status, log.id]);
        } catch (err: any) {
            const nextAttempt = new Date(Date.now() + 5 * 60 * 1000);
            await db.query(`UPDATE webhook_logs SET attempt = attempt + 1, next_attempt_at = ? WHERE id = ?`,
                [nextAttempt, log.id]);
        }
    }
};
