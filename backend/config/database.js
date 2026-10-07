import mongoose from "mongoose";

export const connectDatabase = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URI);
  console.log(`MongoDB connected: ${connection.connection.host}/${connection.connection.name}`);
};
