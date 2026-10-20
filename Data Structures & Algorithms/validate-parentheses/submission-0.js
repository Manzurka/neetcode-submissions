class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const match = {
            ')': '(',
            ']': '[',
            '}': '{',
        };
        for(var char of s){
            if(char === '(' || char === '{' || char === '['){
                stack.push(char);
            } else if(char === ')' || char === '}' || char === ']'){
                if(stack.length === 0 || stack.pop() !== match[char]){
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
