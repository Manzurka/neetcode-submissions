class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let numbers = [];
        const operand = ["+", "-", "*", "/"];
        for(var token of tokens){
            if(operand.includes(token)){
                var num2 = numbers.pop();
                var num1 = numbers.pop();
                if(token === "+"){
                    numbers.push(num1 + num2);
                }
                if(token === "-"){
                    numbers.push(num1 - num2);
                }
                if(token === "*"){  
                    numbers.push(num1 * num2);
                }
                if(token === "/"){
                    numbers.push(Math.trunc(num1 / num2));
                }
            } else {
                numbers.push(parseInt(token));
            }
        }
        return numbers.pop();
    }
}