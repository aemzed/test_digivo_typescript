import { Request, Response } from "express";
import { generateOrder } from "../services/ordersService";
// import { notifyWebhook } from "../services/webhookService";
import { connectDB, getDB } from "../db";

export const createOrder = async (req: Request, res: Response) => {
    try {
        const order = await generateOrder();
        res.json({ status: true, data: order });
    } catch (err: any) {
        res.status(500).json({ status: false, message: err.message });
    }
};
