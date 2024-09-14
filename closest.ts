export function closest(nums: number[], target: number): number {
  // Implement me

  if (nums.length <= 3) {
    return nums.reduce((acc, curr) => acc + curr);
  }

  const sortedClean = nums.sort((a, b) => a - b);

  let closestSum = sortedClean[0] + sortedClean[1] + sortedClean[2];

  for (let i = 0; i < sortedClean.length - 2; i++) {
    let left = i + 1;
    let right = sortedClean.length - 1;

    while (left < right) {
      const currSum = sortedClean[i] + sortedClean[left] + sortedClean[right];

      if (Math.abs(target - currSum) < Math.abs(target - closestSum)) {
        closestSum = currSum;
      }

      if(target > currSum){
         left++;
      } else if (target < currSum){
         right--;
      } else {
         return closestSum;
      }
    }
  }
  return closestSum;
}

module.exports = { closest };

