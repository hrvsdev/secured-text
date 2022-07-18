import { AES, enc } from "crypto-js";

export const encString = (string, key) => {
  return AES.encrypt(string, key).toString();
};

export const decString = (ciphertext, key) => {
  const bytes = AES.decrypt(ciphertext, key);
  return bytes.toString(enc.Utf8);
};

export const encObj = (obj, key) => {
  return AES.encrypt(JSON.stringify(obj), key).toString();
};

export const decObj = (ciphertext, key) => {
  const bytes = AES.decrypt(ciphertext, key);
  const stringBytes = bytes.toString(enc.Utf8);
  if (stringBytes === "") return false;
  return JSON.parse(stringBytes);
};
