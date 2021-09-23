// ? Task:Shuffle an Array


// Solution 1

const shuffleArray = arr => arr.sort(() => 0.5 - Math.random());

console.log(shuffleArray([1, 2, 3, 4]));
// Result: [ 1, 4, 3, 2 ]

// ! Explanation: Shuffling an array is super easy with sort and random methods.
