import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";
import { generateToken } from "../utils/generateToken.js";

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email?.toLowerCase() }).select("+password");
    if (!user || !(await user.comparePassword(req.body.password))) throw new ApiError(401, "Invalid email or password.");
    res.json({ success: true, data: { token: generateToken(user), user: { id: user._id, name: user.name, email: user.email, role: user.role } } });
  } catch (error) { next(error); }
};
export const me = (req, res) => res.json({ success: true, data: { user: req.user } });
