import express from "express";
import * as crypto from "crypto";

const app = express();
app.use(express.json());

const SECRET_KEY = "rahasia_client_123";

app.post("/receive-webhook", (req, res) => {
    const signature = req.header("X-Signature") || "";
    const payload = JSON.stringify(req.body);

    const expectedSignature = crypto
        .createHmac("sha256", SECRET_KEY)
        .update(payload)
        .digest("hex");

    if (signature !== expectedSignature) {
        console.log("❌ Signature mismatch");
        return res.status(401).json({ status: false, message: "Invalid signature" });
    }

    console.log("✅ Webhook received:");
    console.log(req.body);

    return res.json({ status: true, message: "Webhook received" });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Webhook receiver listening on http://localhost:${PORT}/receive-webhook`);
});
