import bcrypt from "bcryptjs";
import cryptojs from "crypto-js/aes";
import connectDB from "$lib/connectDB";
import User from "../../models/user.model";

export async function get({ params }) {
  const param = params.user;
  try {
    await connectDB();
    const user = await User.findOne({ user: param });
    if (user) return { body: { user, success: true } };
    else return { body: { success: false } };
  } catch (err) {
    return {
      status: 500,
      body: err,
    };
  }
}


export async function patch({ request, params }) {
  const id = params.user;
  try {
    await connectDB();
    const data = await request.json();
    const user = await User.findById(id);
    if (user) {
      if (user.contentHash === data.prevContentHash) {
        user.contentHash = data.contentHash;
        user.encContent = data.encContent;
        await user.save();
        return { body: { success: true } };
      } else return { status: 401, body: { success: false } };
    } else return { status: 404, body: { success: false } };
  } catch (err) {
    return {
      status: 500,
      body: err,
    };
  }
}

export async function del({ params }) {
  const param = params.user;
  try {
    await connectDB();
    const user = await User.findOneAndDelete({ user: param });
    if (user) return { body: { success: true } };
    else return { body: { success: false } };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      body: err,
    };
  }
}
