import multer from "multer";
import ApiError from "../utils/ApiError.js";
const storage = multer.memoryStorage();
export const uploadImage = multer({ storage, limits: { fileSize: 8 * 1024 * 1024 }, fileFilter: (_req, file, callback) => file.mimetype.startsWith("image/") ? callback(null, true) : callback(new ApiError(400, "Only image files are allowed.")) });
