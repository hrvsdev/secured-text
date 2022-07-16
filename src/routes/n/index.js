import connectDB from "$lib/connectDB";
import Note from "../../models/note.model";

export async function post({ request }) {
  try {
    await connectDB();
    const data = await request.json();
    const note = new Note(data);
    await note.save();
    return {
      body: { note, success: true },
    };
  } catch (err) {
    console.log(err);
    return {
      status: 400,
      body: err,
    };
  }
}
