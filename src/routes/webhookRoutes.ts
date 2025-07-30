import { Router, Request, Response } from "express";
import { registerWebhook, getRegisteredWebhooks } from "../services/webhookService";
import { sendWebhook } from "../utils/retryQueue";

const router = Router();

router.post("/register", (req: Request, res: Response) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ message: "URL is required" });
    registerWebhook(url);
    return res.json({ message: "Webhook registered successfully" });
});

router.post("/status-update", async (req: Request, res: Response) => {
    const { bookingId, status } = req.body;
    const webhooks = getRegisteredWebhooks();

    for (const url of webhooks) {
        await sendWebhook(url, { bookingId, status, timestamp: Date.now() });
    }

    return res.json({ message: "Webhook notifications triggered" });
});

export default router;
