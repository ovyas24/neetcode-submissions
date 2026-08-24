class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const enc = 'a=opv#s4casx5423sve'
        let res = strs.length + enc
        let str = ''
        for (const word of strs) {
            res += word.length+enc
            str += word
        }
        console.log({
            res, str
        })
        return res + str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log('dec', str)
        const enc = 'a=opv#s4casx5423sve'
        let res = []
        let arr = str.split(enc)
        const len = Number(arr[0])
        const word = arr[arr.length -1]
        if (len == 0) res = []
        else if (len == 1) {
            let wordLength = Number(arr[1])
            if (!wordLength) res.push("")
        } else {
            let pointer = 0;
            for (let i=1;i<arr.length-1;i++) {
                let length = Number(arr[i])
                res.push(word.substring(pointer, pointer+length))
                pointer += length
            }
        }
        return res
    }
}
