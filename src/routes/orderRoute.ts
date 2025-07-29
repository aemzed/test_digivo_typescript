import { Router } from "express";
import { createOrder } from "../controllers/orderController";

const router = Router();

router.post("/generate", createOrder);

export default router;
