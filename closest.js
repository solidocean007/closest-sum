"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closest = closest;
function closest(nums, target) {
    // Implement me
    if (nums.length <= 3) {
        return nums.reduce(function (acc, curr) { return acc + curr; });
    }
    var sortedClean = nums.sort(function (a, b) { return a - b; });
    var closestSum = sortedClean[0] + sortedClean[1] + sortedClean[2];
    for (var i = 0; i < sortedClean.length - 2; i++) {
        var left = i + 1;
        var right = sortedClean.length - 1;
        while (left < right) {
            var currSum = sortedClean[i] + sortedClean[left] + sortedClean[right];
            if (Math.abs(target - currSum) < Math.abs(target - closestSum)) {
                closestSum = currSum;
            }
            if (target > closestSum) {
                left++;
            }
            else if (target < closestSum) {
                right--;
            }
            else {
                return closestSum;
            }
        }
    }
    return closestSum;
}
module.exports = { closest: closest };
