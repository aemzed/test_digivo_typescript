import { Request, Response, NextFunction } from "express";
import crypto from "crypto";

export const verifyHmac = (req: Request, res: Response, next: NextFunction) => {
    const receivedHash = req.headers["x-hash"] as string;
    const secret = process.env.HMAC_SECRET!;
    const body = JSON.stringify(req.body);

    const computedHash = crypto
        .createHmac("sha512", secret)
        .update(body)
        .digest("hex");

    if (receivedHash !== computedHash) {
        return res.status(401).json({ status: false, message: "Unauthorized HMAC" });
    }

    next();
};
