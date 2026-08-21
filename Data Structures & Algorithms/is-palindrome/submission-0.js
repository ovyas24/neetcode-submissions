class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length-1;

        const isValid = (char) => /[a-zA-Z0-9]/.test(char);

        while (left<right) {
            while (left<right && !isValid(s[left])) {
                left++;
            }

            while (left<right && !isValid(s[right])) {
                right--;
            }

            if (s[left].toLowerCase() != s[right].toLowerCase()) {
                return false
            }

            left++;
            right--;
        }

        return true
    }
}
