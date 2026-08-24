class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false
        let charMap = {}
        for (const char of s) {
            charMap[char] = true
        }
        for (const char of t) {
            if (!charMap[char]) return false
        }
        return true
    }
}
