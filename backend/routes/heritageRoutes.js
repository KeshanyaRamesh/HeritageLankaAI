import { Router } from "express";
import { listSites, getSite, adminList, createSite, updateSite, deleteSite } from "../controllers/heritageController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
const router = Router(); router.get("/", listSites); router.get("/admin/all", protect, adminOnly, adminList); router.get("/:id", getSite); router.post("/", protect, adminOnly, createSite); router.put("/:id", protect, adminOnly, updateSite); router.delete("/:id", protect, adminOnly, deleteSite); export default router;
