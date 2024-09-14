"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closest = void 0;
function closest(nums, target) {
    // Implement me
    if (nums.length <= 3) {
        return nums.reduce(function (acc, curr) { return acc + curr; });
    }
    var sortedClean = nums.sort(function (a, b) { return a - b; });
    var closestSum = sortedClean[0] + sortedClean[1] + sortedClean[2];
    for (var i = 0; i < sortedClean.length - 2; i++) {
        var leftPointer = i + 1;
        var rightPointer = sortedClean.length - 1;
        while (leftPointer < rightPointer) {
            var currSum = sortedClean[i] + sortedClean[leftPointer] + sortedClean[rightPointer];
            if (Math.abs(target - currSum) < Math.abs(target - closestSum)) {
                closestSum = currSum;
            }
            if (currSum === target) {
                return currSum;
            }
            if (currSum < target) {
                leftPointer++;
            }
            else {
                rightPointer--;
            }
        }
    }
    return closestSum;
}
exports.closest = closest;
module.exports = { closest: closest };
