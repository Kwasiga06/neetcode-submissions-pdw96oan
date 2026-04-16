class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const n = arr.length;
        const number = [];

        for (let i = 0; i < n; i++){
            number[i] = Math.max(...arr.slice(i + 1))
        }

        number[n - 1] = -1;

        return number;
    }
}
