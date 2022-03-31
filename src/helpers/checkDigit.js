const validateDigitsArr = (digitsArr) => {
  if (!Array.isArray(digitsArr)) throw new Error("The digitsArr argument need to be an array");
  if (digitsArr.length !== 8) throw new Error("Digits array need to contain 8 digits");
  digitsArr.forEach((digit) => {
    if (isNaN(digit)) throw new Error("Digits array need to contain only digits");
  });
};

const checkDigit = ({ digitsArr }) => {
  try {
    validateDigitsArr(digitsArr);
    const multiplicationDigits = digitsArr.map((el, index) => {
      const num = el * (index % 2 ? 2 : 1);
      if (num >= 10) {
        return num + 1 - 10;
      }
      return num;
    });

    const sum = multiplicationDigits.reduce((a, c) => {
      return a + c;
    });

    const remainderNumber = sum % 10;

    if (remainderNumber === 0) return remainderNumber;
    return 10 - remainderNumber;
  } catch (e) {
    console.error(e);
  }
};

export default checkDigit;
