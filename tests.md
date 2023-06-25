Describe: pigLatin(text)

Test: "It will return an error message for if the input is empty string."
Code: pigLatin(""); 
Expected Output: Error: Please enter text."

Test: "It ignores non-alphabetical characters."
Code: pigLatin("*&$92%");
Expected Output: "*&$92%"

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will add 'way' to the end of words that begin with a vowel in a multiple-word sentence."
Code: pigLatin("unicorn likes eating rainbows");
Expected Output: "unicornway likes eatingway rainbows"

Test: "It will move the consonant plus "ay" to the end of words that start with just one consecutive consonant."
code: pigLatin("code")
Expected Output: "odecay"

Test: "It will move all the beginning consecutive consonants plus "ay" to the end of words that start with multiple consecutive consonants."
code: pigLatin("crazy")
Expected Output: "azycray"

Test: "It will move "q" and "u" to the end then append "ay" for words that begin with "qu"."
Code: pigLatin("quick")
Expected Output: "ickquay"

Test: "It will move "s" and append "ay" to the end for words that begin with "squ"."
Code: pigLatin("squid")
Expected Output: "quidsay"

<!-- Describe: vowelCounter();

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0

Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7 -->