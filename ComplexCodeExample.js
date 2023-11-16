/*
  Filename: ComplexCodeExample.js
  Description: This complex JavaScript code demonstrates an algorithm for finding the maximum subarray sum in an array of numbers.
  It utilizes the Kadane's algorithm for finding the maximum sum, with some additional functionality for handling edge cases.

  Note: This code assumes a non-empty input array.

  Usage: To find the maximum subarray sum, call the `findMaxSubarraySum` function with the input array. The function returns the maximum sum.

  Example usage: 
    const inputArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const maxSubarraySum = findMaxSubarraySum(inputArray);
    console.log(maxSubarraySum); // Output: 6
*/

function findMaxSubarraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  let startIndex = 0;
  let endIndex = 0;

  // Iterate through the array from the second element
  for (let i = 1; i < arr.length; i++) {
    // Choose either the current element or the sum including the current element, whichever is larger
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update the maximum sum and the corresponding start and end indices if necessary
    if (currentSum > maxSum) {
      maxSum = currentSum;
      endIndex = i;
    }

    // Update the start index if the current sum becomes negative
    if (currentSum < 0) {
      startIndex = i + 1;
    }
  }

  // Handle edge case when all elements are negative
  if (maxSum < 0) {
    // Find the maximum negative element in the array
    maxSum = arr[0];
    startIndex = 0;
    endIndex = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxSum) {
        maxSum = arr[i];
        startIndex = i;
        endIndex = i;
      }
    }
  }

  return maxSum;
}

// Example usage:
const inputArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarraySum = findMaxSubarraySum(inputArray);
console.log(maxSubarraySum); // Output: 6