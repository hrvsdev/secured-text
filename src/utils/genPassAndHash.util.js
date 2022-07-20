import Cr from "crypto-js";
import { nanoid } from "nanoid";

const genPassAndHash = () => {
  const pass = nanoid();
  const passHash = Cr.SHA512(pass).toString();
  return { pass, passHash };
};

export default genPassAndHash