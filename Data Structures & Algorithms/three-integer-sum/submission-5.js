class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sarray = nums.sort((a, b) => a - b);
        let result = [];
        for (let i = 0; i < sarray.length; i++) {
            let target = -1 * sarray[i];
            let left = i + 1;
            let right = sarray.length - 1;
            if (sarray[i] !== sarray[i - 1]) {
                while (left < right) {
                    let sum = sarray[left] + sarray[right];
                    if (sum < target) {
                        left++;
                    } else if (sum > target) {
                        right--;
                    } else {
                        result.push([sarray[i], sarray[left], sarray[right]]);
                        left++;
                        right--;
                        while (left < right && sarray[left] != sarray[left - 1]) {
                            left++;
                        }
                        while (left < right && sarray[right] != sarray[right + 1]) {
                            right--;
                        }
                        
                    }
                }
            }
        }
        return result;
    }
}
