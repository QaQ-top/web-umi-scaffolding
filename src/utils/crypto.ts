import CryptoJS from 'crypto-js';

const Crypto = {
  // 解密
  decrypt: async (word: any) => {
    if (!word) return '';
    const key = CryptoJS.enc.Utf8.parse('y7AV2c834Bv9ONGF');
    const iv = CryptoJS.enc.Utf8.parse('CXPJIDiqMohwxdUZ');
    const decryptedData = CryptoJS.AES.decrypt(word.data, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const decryptedStr = JSON.parse(
      decryptedData
        .toString(CryptoJS.enc.Utf8)
        .trim()
        .replace(/\00/g, ''),
    );
    return decryptedStr;
  },
  // 加密
  crypto: (word: any) => {
    if (!word) return '';
    word = JSON.stringify(word);
    const key = CryptoJS.enc.Utf8.parse('y7AV2c834Bv9ONGF');
    const iv = CryptoJS.enc.Utf8.parse('CXPJIDiqMohwxdUZ');
    const PADDING = decodeURIComponent('%00');
    const message = word + PADDING.repeat(16 - (word.length % 16));

    const encrypt = CryptoJS.AES.encrypt(message, key, {
      mode: CryptoJS.mode.CBC,
      iv,
      padding: CryptoJS.pad.ZeroPadding,
    });
    return encrypt.toString();
  },
};

export default Crypto;
