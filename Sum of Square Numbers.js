// 633. Sum of Square Numbers
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

 

// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:

// Input: c = 3
// Output: false
 

// Constraints:

// 0 <= c <= 231 - 1


const judgeSquareSum=r=>{let t=0,e=Math.floor(Math.sqrt(r));for(;t<=e;){let u=t*t+e*e;if(u===r)return!0;u>r?e--:t++}return!1};