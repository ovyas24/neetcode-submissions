class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0;
        let left = 0;
        let right = heights.length -1

        while(left<right) {
            let leftVal = heights[left]
            let rightVal = heights[right]
            let curr = (right-left) * Math.min(leftVal, rightVal);
            if (curr > area) {
                area = curr
            }
            if (leftVal<rightVal) {
                left++
            } else {
                right--
            }
        }

        return area
    }
}
