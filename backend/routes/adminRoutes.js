import { Router } from "express";
import { dashboard } from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
const router = Router(); router.get("/dashboard", protect, adminOnly, dashboard); export default router;
