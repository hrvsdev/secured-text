import { SHA512 } from "crypto-js";

export default genHash = (string) => {
  return SHA512(string).toString();
};
