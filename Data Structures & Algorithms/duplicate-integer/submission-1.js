class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dupFinder = {}
        for (const num of nums) {
            if (dupFinder[num]) return true
            dupFinder[num] = true
        }
        return false
    }
}
