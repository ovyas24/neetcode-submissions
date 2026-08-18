class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // [1,2,2,3,3,3], k =2
        const freq = {} // 
        for (const num of nums){
            if (!freq[num]) freq[num] = 1
            else freq[num] += 1
        }
        // freq => {1: 1, 2: 2, 3: 3}
        const uniqSorted = Object.keys(freq).sort((a, b) => (freq[b] - freq[a]))
        return uniqSorted.slice(0, k)
    }
}
