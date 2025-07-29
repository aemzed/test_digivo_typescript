import crypto from "crypto";

export const generateSignature = (payload: string, secret: string) => {
    return crypto.createHmac("sha256", secret).update(payload).digest("hex");
};