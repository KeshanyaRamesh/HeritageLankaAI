import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({ url: { type: String, required: true }, caption: String }, { _id: true });
const heritageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  district: { type: String, required: true, index: true },
  province: { type: String, default: "" },
  category: { type: String, required: true },
  historicalPeriod: { type: String, default: "" },
  unescoStatus: { type: Boolean, default: false },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true },
  history: { type: String, default: "" },
  architecture: { type: String, default: "" },
  visitingHours: { type: String, default: "Open daily; confirm locally before travel." },
  entranceFee: { type: String, default: "Contact the site for current fees." },
  address: { type: String, default: "" },
  latitude: Number,
  longitude: Number,
  coverImage: { type: String, default: "/images/placeholder-site.png" },
  gallery: [imageSchema],
  highlights: [String],
  status: { type: String, enum: ["published", "draft", "archived"], default: "published" },
}, { timestamps: true });
export default mongoose.model("HeritageSite", heritageSchema);
