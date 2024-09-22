/*
Prompt: Write a function that takes a list of numbers and returns the sum of all even numbers in the list.
Extension: Modify the function to return both the sum of even numbers and the sum of odd numbers.
*/

interface SumsUpType {
  evens: number,
  odds: number
}

function returnSums(nums: number[]): SumsUpType {
  return nums.reduce((sumsObj, int) => {
    int % 2 === 0 ? sumsObj.evens += int : sumsObj.odds += int;
    return sumsObj;
  }, { evens: 0, odds: 0 });
}

const testNums = [4, 7, 4, 2, 9, 0, 1, -59];

console.log(returnSums(testNums));