class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numbers = new Set(nums)
        let longest = 0;

        for (const num of numbers) {
            let temp = 0;
            if (!numbers.has(num-1)) {
                temp = 1
                while (numbers.has(num+temp)) {
                    temp++;
                }
            }

            if (longest < temp) {
                longest = temp
            }
        }

        return longest
    }
}
