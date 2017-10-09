// Authors: Isak La Fleur & Andreas Karpasitis
// Name and inputs
const hacker1 = "Isak";
const hacker2 = prompt("What is the name of the navigator?");

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters`,
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `Yo, navigator got the longest name, it has ${hacker2.length} characters`,
  );
} else {
  console.log(`wow, your both got equally long names, ${hacker1.length}`);
}

// Loops
let driverNameReverse = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameReverse += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameReverse);

let navigatorNameReverse = hacker2
  .split("")
  .reverse()
  .join("");
console.log(navigatorNameReverse);

// Lexicographic order

if (hacker1 > hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

// Bonus Palindrome
const stringArray = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon",
  "This is not an palindrome!!!!",
];

function palindrome(string) {
  const cleanString = string.toLowerCase().replace(/\W+/g, "");
  const palindrome = cleanString
    .split("")
    .reverse()
    .join("");
  cleanString === palindrome
    ? console.log("YES, it is a plaindrome")
    : console.log("NO, it is not a palindrome");
}

function checkPalindrome(array) {
  array.forEach(item => palindrome(item));
}

checkPalindrome(stringArray);

// lorem ipsum generator

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt enim. Phasellus vitae nunc vehicula, ultrices ante non, efficitur risus. Ut tristique lorem sit amet feugiat suscipit. Maecenas imperdiet mattis augue, pharetra varius nulla elementum ut. Mauris pulvinar pretium nulla, nec viverra ex tempor et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam in lacus et augue euismod commodo feugiat ac nunc. Integer vehicula lobortis auctor. Fusce pharetra odio vitae orci ornare efficitur. Nunc vulputate gravida lorem id tincidunt. Maecenas tincidunt neque ac sodales semper. Donec vulputate luctus purus, et porttitor urna interdum eu. Nulla consectetur et massa ac interdum. Phasellus ut facilisis sem. Sed in pellentesque dolor. Nam gravida tristique quam, quis laoreet felis varius eu. Duis in massa nisl. Sed at posuere urna, vel tristique diam. Donec euismod ipsum sit amet iaculis semper. Nam dapibus nisl lectus, eget pretium velit molestie sit amet. Morbi dictum sem neque, sit amet lacinia risus sagittis vitae. Donec et nisi vitae sem condimentum hendrerit non nec dui. Donec sit amet mi non dui maximus molestie at at neque. Maecenas at congue dolor, vel ultrices justo. Ut eleifend porta suscipit. In hac habitasse platea dictumst. Fusce lectus lectus, placerat vel maximus ut, fringilla ac sapien. Pellentesque id tincidunt lacus. Integer tincidunt libero at diam aliquam, non eleifend lectus interdum. Vestibulum vestibulum, nisi non vulputate sodales, urna dui convallis purus, sed luctus nibh nunc in libero. Ut consectetur finibus dolor, vitae elementum diam.";

function countWordsInString(string) {
  return string.replace(/\W+/g, " ").split(" ").length;
}

function countSpecificWordInString(string, wordToFind) {
  re = /et/g;
  return string.match(re).length;
}
console.log(countSpecificWordInString(lorem, "et"));

console.log("Number of words in string: ", countWordsInString(lorem));
