import { Response } from "express";

export function ok(res: Response, data: any, message = "success") {
    return res.status(200).json({ success: true, message, data });
}

export function created(res: Response, data: any, message = "created") {
    return res.status(201).json({ success: true, message, data });
}

export function badRequest(res: Response, message = "bad request") {
    return res.status(400).json({ success: false, message });
}

export function serverError(res: Response, message = "internal error") {
    return res.status(500).json({ success: false, message });
}
