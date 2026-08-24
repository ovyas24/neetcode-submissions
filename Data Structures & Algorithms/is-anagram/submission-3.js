class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        const lookupTable = {}; 
        for (const sChar of [...s]){
            lookupTable[sChar] = true
        }

        for (const char of [...t]) {
            if (!lookupTable[char]) return false
        }

        return true
    }
}
