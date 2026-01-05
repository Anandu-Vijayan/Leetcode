// 640. Solve the Equation
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Solve a given equation and return the value of 'x' in the form of a string "x=#value". The equation contains only '+', '-' operation, the variable 'x' and its coefficient. You should return "No solution" if there is no solution for the equation, or "Infinite solutions" if there are infinite solutions for the equation.

// If there is exactly one solution for the equation, we ensure that the value of 'x' is an integer.

 

// Example 1:

// Input: equation = "x+5-3+x=6+x-2"
// Output: "x=2"
// Example 2:

// Input: equation = "x=x"
// Output: "Infinite solutions"
// Example 3:

// Input: equation = "2x=x"
// Output: "x=0"
 

// Constraints:

// 3 <= equation.length <= 1000
// equation has exactly one '='.
// equation consists of integers with an absolute value in the range [0, 100] without any leading zeros, and the variable 'x'.
// The input is generated that if there is a single solution, it will be an integer.

var solveEquation = function(equation) {
    const [left, right] = equation.split('=');

    const parse = (side) => {
        let coeff = 0, constVal = 0, num = '', sign = 1;
        for (let i = 0; i <= side.length; i++) {
            const char = side[i] || '+';
            if (char === '+' || char === '-') {
                if (num) constVal += sign * parseInt(num);
                sign = char === '+' ? 1 : -1;
                num = '';
            } else if (char === 'x') {
                coeff += sign * (num === '' ? 1 : parseInt(num));
                num = '';
            } else {
                num += char;
            }
        }
        return [coeff, constVal];
    };

    const [lCoeff, lConst] = parse(left);
    const [rCoeff, rConst] = parse(right);
    const coeff = lCoeff - rCoeff;
    const constant = rConst - lConst;

    if (coeff === 0) return constant !== 0 ? "No solution" : "Infinite solutions";
    return `x=${constant / coeff}`;
};