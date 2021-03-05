export const patternConfig = {
  phone: /^\d+$/,
  // 只能含有中文、英文大小写字母、数字
  chineseOrEnglishOrNumber: /^[\u4e00-\u9fa5a-zA-Z0-9]*$/,
  // 只能含有英文大小写字母、数字
  englishOrNumber: /^[a-zA-Z0-9]*$/,
  // 只能含有英文大小写字母、数字、符号(全角^\uFF00-\uFFFF + 半角\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F)
  englishOrNumberOrSymbol: /^[0-9a-zA-Z：；‘’“”，。《》【】、：|？’·~！@#￥%……&*（）——+-=\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]+$/,
  // 只能含有中文、英文大小写字母、数字、符号(全角^\uFF00-\uFFFF + 半角\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F)
  chineseOrenglishOrNumberOrSymbol: /^[0-9a-zA-Z：；‘’“”，。《》【】、：|？’·~！@#￥%……&*（）——+-=\u4e00-\u9fa5\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]+$/,
};

export const patternFn = {
  getChineseOrenglishOrNumberOrSymbol: (min: number, max: number) => {
    return new RegExp(
      `^[0-9a-zA-Z：；‘’“”，。《》【】、：|？’·~！@#￥%……&*（）——+-=\u4e00-\u9fa5\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]{${min},${max}}$`,
    );
  },
  getEnglishOrNumberOrSymbol: (min: number, max: number) => {
    return new RegExp(
      `^[0-9a-zA-Z：；‘’“”，。《》【】、：|？’·~！@#￥%……&*（）——+-=\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]{${min},${max}}$`,
    );
  },
  getEnglishOrNumberOrNotChineseSymbol: (min: number, max: number) => {
    return new RegExp(
      `^[0-9a-zA-Z\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]{${min},${max}}$`,
    );
  },
};

export const UsernameRules: any[] = [
  {
    type: 'string',
    min: 6,
    max: 32,
    message: '限制6~32个字符，支持中文、英文大小写、数字、符号',
  },
  {
    validator: (_: any, value: string) => {
      return value &&
        !patternConfig.chineseOrenglishOrNumberOrSymbol.test(value)
        ? Promise.reject('限制6~32个字符，支持中文、英文大小写、数字、符号')
        : Promise.resolve();
    },
  },
];
export const PwdRules: any[] = [
  {
    type: 'string',
    min: 6,
    max: 32,
    message: '限制6~32个字符，支持英文大小写、数字、符号',
  },
  {
    validator: (_: any, value: string) => {
      return value && !patternConfig.englishOrNumberOrSymbol.test(value)
        ? Promise.reject('限制6~32个字符，支持英文大小写、数字、符号')
        : Promise.resolve();
    },
  },
];
