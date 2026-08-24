class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // n^2 loop over array in side another loop and check sumn and return the indexes such as i and j 
        if (nums.length == 2) return nums
        const positonTable = {}
        const sums = []
        //[4, 5 ,6]
        // 10
        for(let i=0;i<nums.length;i++) {
            if (positonTable[target - nums[i]] != undefined) { // 10-4 => 6 // 10-6 4: 0
                sums[0] = positonTable[target - nums[i]]
                sums[1] = i
                break
            }
            positonTable[nums[i]] = i // 4: 0, 5: 1, 6: 2
        }

        return sums;

    }
}
