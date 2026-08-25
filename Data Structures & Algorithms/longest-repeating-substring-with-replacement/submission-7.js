class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let hashSet = {};
        let maxFreq = 0;
        let l = 0;
        let longest = 0;
        let numberRep = 0;
        // XYYX
        for (let r = 0; r < s.length; r++) {
            if (!hashSet[s[r]]) hashSet[s[r]]=1;
            else hashSet[s[r]] += 1

            if (hashSet[s[r]] > maxFreq) {
                maxFreq = hashSet[s[r]]
            }
            numberRep = (r-l+1) - maxFreq
            while(numberRep>k) {
                hashSet[s[l]] -= 1
                l++;
                numberRep = (r-l+1) - maxFreq
            }

            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
