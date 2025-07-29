import express from "express";
import { registerWebhook } from "../controllers/webhookController";

const router = express.Router();

router.post("/register", registerWebhook);

export default router;