class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sNums = nums.sort((a, b) => a - b);
        console.log(sNums);
        let pairs = [];
        for (let i = 0; i < sNums.length; i++) {
            const num = sNums[i];
            const target = -1 * num;
            let left = i + 1;
            let right = sNums.length - 1;
            console.log(target, left < right && sNums[left] + sNums[right] != target)
            while (left < right) {
                console.log({
                    sum: sNums[left] + sNums[right],
                    left, right
                })
                if (sNums[left] + sNums[right] == target) {
                    pairs.push([num, sNums[left], sNums[right]]);
                    break;
                } else if (sNums[left] + sNums[right] < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return pairs;
    }
}
