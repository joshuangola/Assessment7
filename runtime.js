const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

console.log("Results for the extraLargeArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

perf.start();
doublerAppend(largeArray);
let resultsLargeAppend = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsLargeInsert = perf.stop();

console.log("Results for largeArray");
console.log("append", resultsLargeAppend.preciseWords);
console.log("insert", resultsLargeInsert.preciseWords);

perf.start();
doublerAppend(mediumArray);
let resultsMediumAppend = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsMediumInsert = perf.stop();

console.log("Results for mediumArray");
console.log("append", resultsMediumAppend.preciseWords);
console.log("insert", resultsMediumInsert.preciseWords);

perf.start();
doublerAppend(smallArray);
let resultsSmallAppend = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsSmallInsert = perf.stop();

console.log("Results for smallArray");
console.log("append", resultsSmallAppend.preciseWords);
console.log("insert", resultsSmallInsert.preciseWords);

perf.start();
doublerAppend(tinyArray);
let resultsTinyAppend = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsTinyInsert = perf.stop();

console.log("Results for tinyArray");
console.log("append", resultsTinyAppend.preciseWords);
console.log("insert", resultsTinyInsert.preciseWords);
