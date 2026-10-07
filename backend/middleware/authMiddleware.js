import jwt from "jsonwebtoken";
import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";

export const protect = async (req, _res, next) => {
  try {
    const token = req.headers.authorization?.startsWith("Bearer ") ? req.headers.authorization.split(" ")[1] : null;
    if (!token) throw new ApiError(401, "Authentication is required.");
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.id);
    if (!req.user) throw new ApiError(401, "Administrator account no longer exists.");
    next();
  } catch (error) { next(error.statusCode ? error : new ApiError(401, "Invalid or expired token.")); }
};

export const adminOnly = (req, _res, next) => req.user?.role === "admin" ? next() : next(new ApiError(403, "Administrator access required."));
