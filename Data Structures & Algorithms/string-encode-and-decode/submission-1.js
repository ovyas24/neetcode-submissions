class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) return []
        return strs.join('*(__)*')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.split('*(__)*')
    }
}
