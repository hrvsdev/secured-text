import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user: { type: String, unique: true, required: true, trim: true },
    password: String,
    note: String,
  },
  { versionKey: false }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
