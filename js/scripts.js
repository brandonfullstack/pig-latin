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

// Business Logic

function pigLatin(text) {
  if (isEmpty(text)) {
    return "Error: please enter text.";
  }
}


// UI Logic