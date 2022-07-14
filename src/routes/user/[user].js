import connectDB from "$lib/connectDB";
import User from "../../models/user.model";

export async function get({ request, params }) {
  const param = params.user;
  try {
    await connectDB();
    const user = await User.findOne({ user: param });
    if (user) return { body: { user, success: true } };
    else return { body: { user, success: false } };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      body: err,
    };
  }
}

export async function put({ request, params }) {
  const param = params.user;
  try {
    await connectDB();
    const data = await request.json();
    const user = await User.findOneAndUpdate({ user: param }, data);
    if (user) return { body: { user, success: true } };
    else return { body: { user, success: false } };
  } catch (err) {
    console.log(err);
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