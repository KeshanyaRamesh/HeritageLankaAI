import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import heritageRoutes from "./routes/heritageRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173", credentials: true }));
app.use(express.json({ limit: "2mb" }));
app.get("/api/health", (_req, res) => res.json({ success: true, message: "Heritage Lanka AI API is running." }));
app.use("/api/auth", authRoutes); app.use("/api/heritage", heritageRoutes); app.use("/api/ai", aiRoutes); app.use("/api/admin", adminRoutes);
app.use(notFound); app.use(errorHandler);
const port = process.env.PORT || 5000;
connectDatabase().then(() => app.listen(port, () => console.log(`Server running at http://localhost:${port}`))).catch(error => { console.error(error.message); process.exit(1); });
