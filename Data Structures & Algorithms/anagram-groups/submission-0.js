class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length == 1) return [strs]

        const anagramList = {};

        for (const str of strs) {
            let key = str.split("").sort().join("")
            if (!anagramList[key]) anagramList[key] = []
            anagramList[key].push(str)
        }

        const result = Object.values(anagramList)
        return result
    }
}
