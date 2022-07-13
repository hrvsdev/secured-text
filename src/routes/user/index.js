export async function get(req) {
  return {
    status: 200,
    body: {
      msg: import.meta.env.VITE_MONGODB_URI
    },
  };
}
