class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frqMap = new Map()

        for (const num of nums) {
            frqMap.set(num,  frqMap.get(num) ? frqMap.get(num) + 1: 1)
        }

        const bucket = Array.from(
            { length: nums.length + 1 },
            () => []
        )

        for (const [num, count]  of frqMap) {
            bucket[count].push(num)
        }

        const result = []

        for (let i=bucket.length;i>0;i--) {
            if (bucket[i]) {
                for (const num of bucket[i]) {
                    result.push(num)
                }
            }

            if (result.length == k) return result
        }

        return result
    }
}
