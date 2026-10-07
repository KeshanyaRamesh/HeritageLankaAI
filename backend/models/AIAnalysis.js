import mongoose from "mongoose";
const schema = new mongoose.Schema({
  type: { type: String, enum: ["district", "image"], required: true },
  district: String,
  imageName: String,
  result: { type: mongoose.Schema.Types.Mixed, required: true },
}, { timestamps: true });
export default mongoose.model("AIAnalysis", schema);
