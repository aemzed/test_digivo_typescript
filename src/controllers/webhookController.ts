import { Request, Response } from "express";
import { db } from "../db";
import crypto from "crypto";

export const registerWebhook = async (req: Request, res: Response) => {
    const { url, secret_key } = req.body;
    if (!url || !secret_key) {
        return res.status(400).json({ status: false, message: "Missing url or secret_key" });
    }

    await db.query(
        `INSERT INTO webhooks (url, secret_key) VALUES (?, ?)`,
        [url, secret_key]
    );

    res.json({ status: true, message: "Webhook registered" });
};