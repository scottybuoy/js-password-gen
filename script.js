// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Write password to the #password input
function writePassword() {

var inputLength = prompt("Please choose a password length between 8 and 128 characters");

  while (inputLength < 8 || inputLength > 128 || isNaN(inputLength) == true) {
    if (inputLength < 8 || inputLength > 128 || isNaN(inputLength) == true)  {
      var inputLength = prompt("Please enter a valid number between 8 and 128 characters");
    }
  }

  var inputLowerCase = confirm("Click OK to include lowercase letters,\nCancel to exclude them");
  var inputUpperCase = confirm("Click OK to include uppercase letters,\nCancel to exclude them");
  var inputNumeric = confirm("Click OK to include numeric characters,\nCancel to exclude them");
  var inputSpecial = confirm("Click OK to include special characters,\nCancel to exclude them");

  while (inputLowerCase === false && inputUpperCase === false && inputNumeric === false && inputSpecial === false) {
    if (inputLowerCase === false && inputUpperCase === false && inputNumeric === false && inputSpecial === false) {
      alert("Must select at least one character type");
      var inputLowerCase = confirm("Click OK to include lowercase letters,\nCancel to exclude them");
      var inputUpperCase = confirm("Click OK to include uppercase letters,\nCancel to exclude them");
      var inputNumeric = confirm("Click OK to include numeric characters,\nCancel to exclude them");
      var inputSpecial = confirm("Click OK to include special characters,\nCancel to exclude them");

    }
  }
  
  var passSelect = Math.floor(Math.random() * 26);
  console.log(lettersLower[passSelect]);

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
