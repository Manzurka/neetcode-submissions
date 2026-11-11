class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0, right = numbers.length - 1;
        while (left < right) {
            // assume numbers array is sorted
            const totalSum = numbers[left] + numbers[right];
            // Check if 2 numbers` sum is bigger or smaller than target, move pointers accordingly
            if (totalSum > target) {
                right--;  // move to the left (smaller number)
            }
            else if (totalSum < target) {
                left++;   // move to the right (bigger number)
            }
            else {
                return [left + 1,  right + 1] // return numbers by their 1-indexed position
            }
        }
        return [];  
    }
}
