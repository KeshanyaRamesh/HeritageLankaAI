import HeritageSite from "../models/HeritageSite.js";
import AIAnalysis from "../models/AIAnalysis.js";
export const dashboard = async (_req, res, next) => { try { const [totalSites, totalAnalyses, districts] = await Promise.all([HeritageSite.countDocuments(), AIAnalysis.countDocuments(), HeritageSite.distinct("district")]); res.json({ success: true, data: { totalSites, totalAnalyses, totalDistricts: districts.length, districts } }); } catch (e) { next(e); } };
