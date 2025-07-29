import express from "express";
import { notifyWebhook } from "../services/webhookService";

const router = express.Router();

router.post("/simulate-order-update", async (req, res) => {
    const { orderId, status } = req.body;

    try {
        await notifyWebhook(orderId, status);
        res.json({ status: true, message: "Webhook notification sent (or scheduled retry)." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Failed to notify webhook." });
    }
});

export default router;
