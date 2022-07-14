import connectDB from "$lib/connectDB";
import User from "../../models/user.model";

export async function post({request}) {
  try {
    await connectDB();
    const data = await request.json();
    const user = new User(data);
    await user.save();
    return { body: user };
  } catch (err) {
    console.log(err);
    return {
      status: 400,
      body: err,
    };
  }
}

