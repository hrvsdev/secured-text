import Cr from "crypto-js";

const genHash = (string) => {
  return Cr.SHA512(string).toString();
};


export default genHash