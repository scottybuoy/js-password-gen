// Assignment Code
var generateBtn = document.querySelector("#generate");
var letLow = "abcdefghijklmnopqrstuvwxyz";
var letUp = letLow.toUpperCase();
var nums = "0123456789";
var specChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var allChar = letLow.concat(letUp, nums, specChar);
var noLow = letUp.concat(nums, specChar);
var noUp = letLow.concat(nums, specChar);
var noNum = letLow.concat(letUp, specChar);
var noSpecChar = letLow.concat(letUp, nums);




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

// User confirms all character types
  if (inputLowerCase === true && inputUpperCase === true && inputNumeric === true && inputSpecial === true) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += allChar.charAt(Math.floor(Math.random() * allChar.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
    console.log("hey");
  }
  

  // User excludes lower case
  if (inputLowerCase === false && inputUpperCase === true && inputNumeric === true && inputSpecial === true) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += allChar.charAt(Math.floor(Math.random() * allChar.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
    console.log("hey");
  }


  // User excludes numbers
  if (inputLowerCase === true && inputUpperCase === true && inputNumeric === false && inputSpecial === true) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += allChar.charAt(Math.floor(Math.random() * allChar.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
    console.log("hey");
  }

  


  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
