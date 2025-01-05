/**
 * @description Using Loop
 * @param {number} n
 * @returns {number}
 * @example sum_to_n_a(10) // 55
 * Complexity: O(n) - The loop runs n times
 * Space Complexity: O(1) - We are not using any extra space
 * Efficiency: It does not make use of ES6 features and the complexity is not good
 */
function sum_to_n_a(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @description Using Gauss formula
 * @param {number} n
 * @returns {number}
 * @example sum_to_n_b(10) // 55
 * Complexity: O(1) - The formula runs in constant time
 * Space Complexity: O(1) - We are not using any extra space
 * Efficiency: This is the most efficient solution because it runs in constant time and does not use any extra space
 */
function sum_to_n_b(n) {
  // if n is really big, we can use BigInt to avoid overflow
  // return Number((BigInt(n) * (BigInt(n) + BigInt(1))) / BigInt(2));
  return (n * (n + 1)) / 2;
}

// Using Loop too, but instead of using for loop, we use Array.from to create an array of numbers from 1 to n and then use reduce to sum the numbers
/**
 * @description Using Array.from and reduce
 * @param {number} n
 * @returns {number}
 * @example sum_to_n_c(10) // 55
 * Complexity: O(n) - The loop runs n times
 * Space Complexity: O(n) - Cost extra space for the array
 * Efficiency: Not efficient because it uses extra space for the array but it is still better than the loop because its using ES6 features, make it more readable
 */
function sum_to_n_c(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, curr) => acc + curr,
    0
  );
}

// Using Recursive
/**
 * @description Using Recursive
 * @param {number} n
 * @returns {number}
 * @example sum_to_n_d(10) // 55
 * Complexity: O(n) - The recursive call runs n times
 * Space Complexity: O(n) - The recursive call uses extra space for the call stack
 * Efficiency: Not efficient because it uses extra space for the call stack and the complexity is not good
 */
function sum_to_n_d(n) {
  if (n === 1) return 1;
  return n + sum_to_n_d(n - 1);
}
