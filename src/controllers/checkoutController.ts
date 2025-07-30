import { Request, Response } from "express";
import { checkoutService } from "../services/checkoutService";
import { badRequest, created, serverError } from "../utils/responseUtils";

export async function checkoutController(req: Request, res: Response) {
    try {
        const { email, items } = req.body;

        if (!email || !Array.isArray(items) || items.length === 0) {
            return badRequest(res, "email & items wajib");
        }

        const order = await checkoutService(email, items);
        return created(res, order, "checkout sukses");
    } catch (err: any) {
        const msg = err?.message || "gagal checkout";
        // Bisa mapping error spesifik (misal stok habis) → 400
        if (/Stok tidak cukup|invalid|wajib/i.test(msg)) {
            return badRequest(res, msg);
        }
        return serverError(res, msg);
    }
}
