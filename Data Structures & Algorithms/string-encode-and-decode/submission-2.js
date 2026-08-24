class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        if (strs.length) {
            res = strs.join('*(__)*')
        }

        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        if (str.length) {
            res = str.split('*(__)*')
        }
        return res
    }
}
