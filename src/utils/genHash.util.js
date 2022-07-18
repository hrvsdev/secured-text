import { SHA512 } from "crypto-js";

const genHash = (string) => {
  return SHA512(string).toString();
};


export default genHash