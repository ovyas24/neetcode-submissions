class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     if (nums.length < 2) return false;
    //     const hashMap = {}
    //     let result = false;
    //     for (const num of nums) {
    //         if (hashMap[num]) {
    //             result = true;
    //             break;
    //         }
    //         hashMap[num] = true;
    //     }

    //     return result
    // }
    hasDuplicate(nums) {
        if (nums.length < 2) return false;
        const hashMap = [...new Set(nums)]

        return hashMap.length != nums.length
    }
}
