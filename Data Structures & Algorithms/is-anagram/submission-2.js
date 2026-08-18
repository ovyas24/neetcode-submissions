class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false
        let charMapS = {}
        let charMapT = {}
        for (const char of s) {
            if (!charMapS[char]) charMapS[char] = 1
            else charMapS[char] += 1
        }
        for (const char of t) {
            if (!charMapT[char]) charMapT[char] = 1
            else charMapT[char] += 1
        }
        for (const key of Object.keys(charMapS)) {
            if (charMapS[key] != charMapT[key] ) return false
        }
        return true
    }
}
