function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
}
console.log(addToZero([1, 2, 3, -2]));
console.log(addToZero([1]));
// BigO notation  O(n^2) this is a for loop in a for loop so it is n to the second power, not scaling very well.

function hasUniqueChars(word) {
  const sortedWord = word.split("").sort();

  for (let i = 1; i < sortedWord.length; i++) {
    if (sortedWord[i] === sortedWord[i - 1]) {
      return false;
    }
  }

  return true;
}
console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
// BigO notation after doing a lot of research online i believe this to be a O(n log n) this is due to the .sort method.

function isPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let foundLetters = "";

  for (const char of sentence.toLowerCase()) {
    if (alphabet.includes(char) && !foundLetters.includes(char)) {
      foundLetters += char;
    }
    if (foundLetters.length === alphabet.length) {
      return true;
    }
  }

  return false;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));
// BigO notation  O(n) there is only one for of loop in this function. it does look though the array of the alphabet but since it is only 26 letters it should not impact the time to a large degree.

function findLongestWord(words) {
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  return maxLength;
}
console.log(findLongestWord(["hi", "hello"]));
// BigO notation  O(n) there is only 1 for of loop in this function
