class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let n = s.length;
        let res = 0;

        for (let i = 1; i < n; i++){
            res += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
        }
        return res;
    }
}
