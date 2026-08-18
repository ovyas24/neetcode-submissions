class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        const sLookupTable = {}; 

        for (const sChar of [...s]){
            if (!sLookupTable[sChar]) sLookupTable[sChar] =0
            sLookupTable[sChar] += 1
        }
        const tLookupTable = {}
        for (const char of [...t]) {
            if (!tLookupTable[char]) tLookupTable[char] =0
            tLookupTable[char] += 1
        }

        for (const char of [...t]) {
            if (sLookupTable[char] != tLookupTable[char]) return false
        }
        return true
    }
}
