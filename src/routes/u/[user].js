import bcrypt from "bcryptjs";
import cryptojs from "crypto-js/aes"
import connectDB from "$lib/connectDB";
import User from "../../models/user.model";

export async function get({ params }) {
  const param = params.user;
  try {
    await connectDB();
    const user = await User.findOne({ user: param });
    if (user) return { body: { success: true } };
    else return { body: { success: false } };
  } catch (err) {
    return {
      status: 500,
      body: err,
    };
  }
}

export async function post({ request, params }) {
  const param = params.user;
  try {
    await connectDB();
    const data = await request.json();
    const user = await User.findOne({ user: param });
    if (user && (await bcrypt.compare(data.password, user.password))) {
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
    } else
      return { status: 401, body: { msg: "wrong password", success: false } };
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
    const user = await User.findByIdAndUpdate(id, data);
    if (user) return { body: { notes: user.notes }, status: 200 };
    else return { body: { success: false } };
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
