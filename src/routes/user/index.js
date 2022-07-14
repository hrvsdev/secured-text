import connectDB from "$lib/connectDB";
import User from "../../models/user.model";

export async function post({ request }) {
  try {
    await connectDB();
    const data = await request.json();
    const user = new User(data);
    await user.save();
    return {
      body: {
        user: {
          _id: user._id,
          user: user.user,
          note: user.note,
        },
        success: true,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      status: 400,
      body: err,
    };
  }
}
