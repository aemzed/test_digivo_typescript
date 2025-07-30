import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

import imageRoute from "./routes/image";
import orderRoutes from "./routes/orderRoute";
import webhookRoutes from "./routes/webhookRoutes";
import checkoutRoute from "./routes/checkoutRoute";
import { connectDB } from "./db";

dotenv.config();

const uploadPath = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/image", imageRoute);
app.use("/orders", orderRoutes);
app.use("/webhook", webhookRoutes);
app.use("/checkout", checkoutRoute);

(async () => {
    await connectDB();

    app.listen(port, () => {
        console.log(`🚀 Server running on port ${port}`);
    });
})();
