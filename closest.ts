export function closest(nums: number[], target: number): number {
  // Implement me

  if (nums.length <= 3) {
    return nums.reduce((acc, curr) => acc + curr);
  }

  const sortedClean = nums.sort((a, b) => a - b);

  let closestSum = sortedClean[0] + sortedClean[1] + sortedClean[2];

  for (let i = 0; i < sortedClean.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = sortedClean.length - 1;

    while (leftPointer < rightPointer) {
      const currSum = sortedClean[i] + sortedClean[leftPointer] + sortedClean[rightPointer];

      if (Math.abs(target - currSum) < Math.abs(target - closestSum)) {
        closestSum = currSum;
      }

      if (currSum === target) {
        return currSum;
      }
      if (currSum < target) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }
  return closestSum;
}

module.exports = { closest };
