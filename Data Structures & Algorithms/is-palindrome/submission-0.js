class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, ''); // strip empty space and special characters
        console.log(s);
        let left = 0, right = s.length - 1;
        // Iterate while left pointer is less than right
        while (left < right) {
            // Check if strings are matching
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++; // move left pointer
            right--; // move right pointer
        }
        // it is palindrome
        return true;
    }

}
