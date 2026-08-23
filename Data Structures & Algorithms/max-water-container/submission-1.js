class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // (r-l) * MinHieght(r, l) == area
        let area = 0
        let left = 0
        let right = heights.length -1
        while (left < right) {
            area = Math.max(area, (right-left) * Math.min(heights[right] , heights[left]))
            if (heights[right] > heights[left]) {
                left ++
            } else {
                right --
            }
        }

        return area
    }
}
