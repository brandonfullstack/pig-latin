// Utility Logic

function isEmpty() {
  for (let i=0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

function isVowelOrConsonant() {
  ignoredCharacters != ["a", "b", "c", "d"]
}

// Business Logic

function pigLatin(text) {
  if (isEmpty(text)) {
    return "Error: please enter text.";
  }
  else if (isVowelOrConsonant.includes(text)) {
    return text;
  }
}

function omitWords(text) {
  const omittedWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const words = text.split(' ');

  words.forEach(function(word, index) {
      if (omittedWords.includes(word.toLowerCase())) {
      words[index] = '***'; // Replace the word with asterisks
      }
  });

  let omittedText = words.join(' ');

  return omittedText;
  }

// UI Logic