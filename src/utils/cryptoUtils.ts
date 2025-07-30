import crypto from "crypto";

const SECRET_KEY = process.env.WEBHOOK_SECRET || "supersecret";
const ENCRYPTION_KEY = crypto.createHash("sha256").update(SECRET_KEY).digest();
const IV = Buffer.alloc(16, 0);

export function signPayload(payload: any): string {
    return crypto.createHmac("sha256", SECRET_KEY)
        .update(JSON.stringify(payload))
        .digest("hex");
}

export function encryptPayload(payload: any): string {
    const cipher = crypto.createCipheriv("aes-256-cbc", ENCRYPTION_KEY, IV);
    let encrypted = cipher.update(JSON.stringify(payload), "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted;
}
