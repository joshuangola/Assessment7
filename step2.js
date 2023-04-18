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
// BigO notation  O(n^2)

function hasUniqueChars(word) {
  const sortedWord = word.split("").sort();

  for (let i = 1; i < sortedWord.length; i++) {
    if (sortedWord[i] === sortedWord[i - 1]) {
      return false;
    }
  }

  return true;
}
// BigO notation  O(n log n)

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
// BigO notation  O(n)

function findLongestWord(words) {
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  return maxLength;
}
// BigO notation  O(n)
