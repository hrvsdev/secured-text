import mongoose from "mongoose";

const MONGODB_URI = import.meta.env.VITE_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

async function connectDB() {
  // if (cached.conn) {
  //   return cached.conn;
  // }

  // if (!cached.promise) {
  //   const opts = {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     autoIndex: true
  //   };

    mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
    // cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
    //   return mongoose;
    // });
  // }
  // cached.conn = await cached.promise;
  // return cached.conn;
}

export default connectDB;