import connectDB from "$lib/connectDB";
import User from "../../models/user.model";
import bcrypt from "bcryptjs";

export async function post({ request }) {
  try {
    await connectDB();
    const data = await request.json();
    const user = new User({
      ...data,
      password: await bcrypt.hash(data.password, 10),
    });
    await user.save();
    return {
      body: {
        user: {
          _id: user._id,
          user: user.user,
          notes: user.notes,
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
