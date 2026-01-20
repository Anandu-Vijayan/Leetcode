// 664. Strange Printer
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// There is a strange printer with the following two special properties:

// The printer can only print a sequence of the same character each time.
// At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.
// Given a string s, return the minimum number of turns the printer needed to print it.

 

// Example 1:

// Input: s = "aaabbb"
// Output: 2
// Explanation: Print "aaa" first and then print "bbb".
// Example 2:

// Input: s = "aba"
// Output: 2
// Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
 

// Constraints:

// 1 <= s.length <= 100
// s consists of lowercase English letters.


var strangePrinter = function(s) {
    const memo = {};

    function min_turns_to_print(start, end) {
        if (start > end) {
            return 0;
        }
        
        if (memo.hasOwnProperty(`${start}-${end}`)) {
            return memo[`${start}-${end}`];
        }
        
        let res = min_turns_to_print(start, end - 1) + 1;

        for (let middle = start; middle < end; middle++) {
            if (s[middle] === s[end]) {
                res = Math.min(res, min_turns_to_print(start, middle) + min_turns_to_print(middle + 1, end - 1));
            }
        }
        
        memo[`${start}-${end}`] = res;
        return res;
    }

    return min_turns_to_print(0, s.length - 1);    
};