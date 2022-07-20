import Cr from "crypto-js";

export const encString = (string, key) => {
  return Cr.AES.encrypt(string, key).toString();
};

export const decString = (ciphertext, key) => {
  const bytes = Cr.AES.decrypt(ciphertext, key);
  return bytes.toString(Cr.enc.Utf8);
};

export const encObj = (obj, key) => {
  return Cr.AES.encrypt(JSON.stringify(obj), key).toString();
};

export const decObj = (ciphertext, key) => {
  const bytes = Cr.AES.decrypt(ciphertext, key);
  const stringBytes = bytes.toString(Cr.enc.Utf8);
  if (stringBytes === "") return false;
  return JSON.parse(stringBytes);
};
