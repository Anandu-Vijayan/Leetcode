// 668. Kth Smallest Number in Multiplication Table
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is an integer matrix mat where mat[i][j] == i * j (1-indexed).

// Given three integers m, n, and k, return the kth smallest element in the m x n multiplication table.

 

// Example 1:


// Input: m = 3, n = 3, k = 5
// Output: 3
// Explanation: The 5th smallest number is 3.
// Example 2:


// Input: m = 2, n = 3, k = 6
// Output: 6
// Explanation: The 6th smallest number is 6.
 

// Constraints:

// 1 <= m, n <= 3 * 104
// 1 <= k <= m * n
 
/**************************😎**************************/
const findKthNumber=(t,e,n)=>{let l=0,r=t*e;for(;l+1<r;){let u=l+~~((r-l)/2);lessThanEqual(u,t,e)>=n?r=u:l=u}return r};function lessThanEqual(t,e,n){let l=0;for(let r=1;r<=e;r++)l+=Math.min(~~(t/r),n);return l}