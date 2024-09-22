/*
Prompt: Write a function that takes a list of numbers and returns the sum of all even numbers in the list.
Extension: Modify the function to return both the sum of even numbers and the sum of odd numbers.
*/
function returnSums(nums) {
    var sumsObj = { evens: 0, odds: 0 };
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var int = nums_1[_i];
        int % 2 == 0 ? sumsObj.evens += int : sumsObj.odds += int;
    }
    return sumsObj;
}
var testNums = [4, 7, 4, 2, 9, 0, 1, -59];
console.log(returnSums(testNums));
