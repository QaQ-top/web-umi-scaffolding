import CryptoJS from 'crypto-js';
// TODO: 未完成
// import img from '@/assets/images/money.png';
// let kv: any = undefined;
// const img: any = new Image();
// img.onload = () => {
//   const canvas = document.createElement('canvas');
//   const ctx: any = canvas.getContext('2d');
//   ctx.canvas.width = img.width;
//   ctx.canvas.height = img.height;
//   ctx.drawImage(img, 0, 0);
//   const imgData = ctx.getImageData(0, 0, img.width, img.height);
//   const from: any = [];
//   for (var i = 0; i < 47; i++) {
//     from.push(imgData.data[i * 4]);
//   }
//   kv = JSON.parse(String.fromCharCode(...from));
// };
// img.src = imgUrl;
const Crypto = {
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
