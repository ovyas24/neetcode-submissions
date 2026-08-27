class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let a = {
            '}': '{',
            ']': '[',
            ')': '('
        };
        if (a[s[0]]) return false
        for (let i =0;i<s.length;i++) {
            if (!a[s[i]]) stack.push(s[i])
            else if(stack.pop() != a[s[i]]) {
                return false
            }
        }

        return stack.length < 1
    }
}
