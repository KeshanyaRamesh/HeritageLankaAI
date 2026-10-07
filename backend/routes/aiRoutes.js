import { Router } from "express";
import { analyzeDistrict, analyzeImage, history, deleteAnalysis } from "../controllers/aiController.js";
import { uploadImage } from "../middleware/uploadMiddleware.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
const router = Router(); router.post("/district", analyzeDistrict); router.post("/image", uploadImage.single("image"), analyzeImage); router.get("/history", protect, adminOnly, history); router.delete("/history/:id", protect, adminOnly, deleteAnalysis); export default router;
