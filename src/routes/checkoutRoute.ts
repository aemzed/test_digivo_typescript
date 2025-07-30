import { Router } from "express";
import { checkoutController } from "../controllers/checkoutController";

const router = Router();

// POST /checkout
router.post("/", checkoutController);

export default router;
