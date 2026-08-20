class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = []
        const suffix = Array.from({
            length: nums.length
        })
        const result = []
        for (let i=0; i<nums.length;i++) {
            let prefixMulti = prefix[i-1] != undefined ? prefix[i-1] : 1
            let previousValue = nums[i-1] != undefined ? nums[i-1] :  1
            prefix.push(prefixMulti * previousValue)
        }

        for (let i=nums.length-1; i>=0;i--) {
            let suffixMulti = suffix[i+1] != undefined ? suffix[i+1] : 1
            let nextValue = nums[i+1] != undefined ? nums[i+1] :  1
            suffix[i] =suffixMulti * nextValue
        }
        console.log({
            prefix, suffix
        })
        for (let i=0;i<nums.length;i++){
            result.push(prefix[i] * suffix[i])
        }

        return result
    }
}
