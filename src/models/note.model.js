import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  },
  { versionKey: false }
);

export default mongoose.models.Note || mongoose.model("Note", noteSchema);