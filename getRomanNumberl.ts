function getRomanNumeral(num: number) {
  let romanNumeral: string = "";
  let intNum = num;
  function helper(value: number) {
    if (value < 10) {
      if (value == 4) {
        romanNumeral += "IV";
      } else if (value == 9) {
        romanNumeral += "IX";
      } else if (value == 5) {
        romanNumeral += "V";
      } else if (value < 4) {
        romanNumeral += "I".repeat(num);
      } else {
        romanNumeral += "V" + "I".repeat(value - 5);
      }
      return romanNumeral; // return console.log('Answer: ',romanNumeral);
    } else if (value < 100) {
      if (value == 10) {
        romanNumeral += "X";
      } else if (value <= 49 && value >= 40) {
        romanNumeral += "XV";
      } else if (value <= 99 && value >= 90) {
        romanNumeral += "XC";
      } else if (value == 50) {
        romanNumeral += "L";
      } else if (value < 40) {
        const count = (value - (value % 10)) / 10;
        romanNumeral += "X".repeat(count);
      }
    } else if (value < 500) {
      if (value === 100) {
        romanNumeral += "C";
      } else if (value <= 490 && value >= 400) {
        romanNumeral += "CD";
      } else {
        const count = (value - (value % 100)) / 100;
        romanNumeral += "C".repeat(count);
      }
    } else if (value < 1000) {
      if (value === 500) {
        romanNumeral += "D";
      } else if (value <= 999 && value >= 900) {
        romanNumeral += "CM";
      } else {
        const count = (value - (value % 100)) / 100;
        romanNumeral += "D" + "C".repeat(count - 5);
      }
    } else {
      if (value === 1000) {
        romanNumeral += "M";
      } else {
        const count = (value - (value % 1000)) / 1000;
        romanNumeral += "M".repeat(count);
      }
    }
    intNum = Number(value.toString().slice(1));
    helper(intNum);
    return romanNumeral;
  }
  return helper(intNum);
}
