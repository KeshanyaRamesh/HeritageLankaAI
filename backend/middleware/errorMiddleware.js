export const notFound = (req, _res, next) => { const error = new Error(`Route not found: ${req.originalUrl}`); error.statusCode = 404; next(error); };
export const errorHandler = (error, _req, res, _next) => res.status(error.statusCode || 500).json({ success: false, message: error.message || "Internal server error" });
