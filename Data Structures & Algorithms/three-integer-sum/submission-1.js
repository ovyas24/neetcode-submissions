class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sNums = nums.sort((a, b) => a - b);
        const pairs = [];

        for (let i = 0; i < sNums.length - 2; i++) {
            // No triplet can sum to zero after this point
            if (sNums[i] > 0) break;

            // Skip duplicate first numbers
            if (i > 0 && sNums[i] === sNums[i - 1]) {
                continue;
            }

            const num = sNums[i];
            const target = -num;

            let left = i + 1;
            let right = sNums.length - 1;

            while (left < right) {
                const sum = sNums[left] + sNums[right];

                if (sum === target) {
                    pairs.push([
                        num,
                        sNums[left],
                        sNums[right]
                    ]);

                    left++;
                    right--;

                    // Skip duplicate left values
                    while (
                        left < right &&
                        sNums[left] === sNums[left - 1]
                    ) {
                        left++;
                    }

                    // Skip duplicate right values
                    while (
                        left < right &&
                        sNums[right] === sNums[right + 1]
                    ) {
                        right--;
                    }
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return pairs;
    }
}