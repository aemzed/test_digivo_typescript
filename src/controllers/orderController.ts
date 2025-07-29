import { Request, Response } from "express";
import { generateOrder } from "../services/ordersService";
import { notifyWebhook } from "../services/webhookService";
import { db } from "../db";

export const createOrder = async (req: Request, res: Response) => {
    try {
        const order = await generateOrder();
        res.json({ status: true, data: order });
    } catch (err: any) {
        res.status(500).json({ status: false, message: err.message });
    }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
    const { orderId, newStatus } = req.body;

    try {
        await db.query(`UPDATE orders SET status = ? WHERE id = ?`, [newStatus, orderId]);

        // Notify webhook
        await notifyWebhook(orderId, newStatus);

        res.json({ status: true, message: "Status updated and webhook notified" });
    } catch (err: any) {
        res.status(500).json({ status: false, message: err.message });
    }
};