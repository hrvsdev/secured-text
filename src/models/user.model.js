import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user: { type: String, unique: true, required: true, trim: true },
    contentHash: String,
    encContent: String,
  },
  { versionKey: false }
);

export default mongoose.models.User || mongoose.model("User", userSchema);