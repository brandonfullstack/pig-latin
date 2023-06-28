// Business Logic

function pigLatin(word) {
  let pLWord;
  const textArray = word.split("");
  for (let i = 0; i <= word.length; i += 1) {
    if (textArray[0] === "a" || textArray[0] === "e" || textArray[0] === "i" || textArray[0] === "o" || textArray[0] === "u") {
      pLWord = (word + "way");
    } else if (textArray[0] === "q") {
      pLWord = (word.slice(2) + word.slice(0, 2) + "ay");
    } else if (textArray[0] === "s" && textArray[1] === "q" && textArray[2] === "u") {
      pLWord = (word.slice(3) + word.slice(0, 3) + "ay");
    } else if (textArray[1] !== "a" || textArray[1] !== "e" || textArray[1] !== "i" || textArray[1] === "o" || textArray[1] !== "u") {
      pLWord = (word.slice(2) + word.slice(0, 2) + "ay")
    } else if (textArray[0] !== "a" || textArray[0] !== "e" || textArray[0] !== "i" || textArray[0] !== "o" || textArray[0] !== "u") {
      pLWord = (word.slice(1) + word.slice(0, 1) + "ay")
    } else {
      pLWord = (word.slice(1) + word.slice(0, 1) + "ay")
    }
  }
  return pLWord;
};

// function pigLatin(word) {
//   let pLWord;
//   const textArray = word.split("");
//   for(let i = 0; i <= word.length; i += 1) {
//     if (textArray[0] === "a" || textArray[0] === "e" || textArray[0] === "i" || textArray[0] === "o" || textArray[0] === "u") {
//       pLWord = (word + "way");
//     } else if (textArray[0] === "q" ) {
//       pLWord = (word.slice(2) + word.slice(0,2) + "ay");
//     } else if (textArray[0] === "s" && textArray[1] === "q" && textArray[2] === "u") {
//       pLWord = (word.slice(3) + word.slice(0,3) + "ay");
//     } else if (textArray[2] !== "a" || textArray[2] !== "e" || textArray[2]!=="i" || textArray[2] === "o" || textArray[2] !== "u") { 
//         pLWord = (word.slice(3) + word.slice(0,3) + "ay")
//     } else if (textArray[1] !== "a" || textArray[1] !== "e" || textArray[1] !== "i" || textArray[1] !== "o" || textArray[1] !== "u") {
//         pLWord = (word.slice(2) + word.slice(0,2) + "ay")
//     } else {
//       pLWord = (word.slice(1) + word.slice(0,1) + "ay")
//     }
//   }
//   return pLWord;
// };

// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const pLWord = pigLatin(passage);
  document.getElementById("tranlated-text").innerText = pLWord;
}

window.addEventListener("load", function () {
  document.querySelector("form#text-translator").addEventListener("submit", handleFormSubmission);
});