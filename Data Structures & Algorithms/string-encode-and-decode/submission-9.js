class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ''
        for (const word of strs) {
            str += word.length + '@' + word
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let pointer = 0;

        while(pointer < str.length) {
            let sep = pointer;

            while(str[sep] != '@') {
                sep++;
            }

            let len = Number(str.substring(pointer, sep))
            let wordStart = sep+1;
            let wordEnd = wordStart+len

            let word = str.substring(wordStart, wordEnd)
            res.push(word)
            pointer = wordEnd
        }
        return res
    }
}
