const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(nums.map((i) => i+10 ));
//chaining
const newnums = nums

.map((i) => i * 10)
.map((i) => i + 1)
.filter((i) => i >= 50 )

console.log(newnums);
