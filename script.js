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
var noUpNum = letLow.concat(specChar);
var noLet = nums.concat(specChar);
var noLowNum = letUp.concat(specChar);
var upNum = letUp.concat(nums);
var lowNum = letLow.concat(nums);
var lowUp = letLow.concat(letUp);




// Write password to the #password input
function writePassword() {

  var inputLength = prompt("Please choose a password length between 8 and 128 characters");


  while (inputLength < 8 || inputLength > 128 || isNaN(inputLength) == true) {
    
      var inputLength = prompt("Please enter a valid number between 8 and 128 characters");
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
  }
  

  // User excludes lower case
  if (inputLowerCase === false && inputUpperCase === true && inputNumeric === true && inputSpecial === true) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += noLow.charAt(Math.floor(Math.random() * noLow.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


  // User excludes upper case
  if (inputLowerCase === true && inputUpperCase === false && inputNumeric === true && inputSpecial === true) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += noUp.charAt(Math.floor(Math.random() * noUp.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


   // User excludes numbers
   if (inputLowerCase === true && inputUpperCase === true && inputNumeric === false && inputSpecial === true) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += noNum.charAt(Math.floor(Math.random() * noNum.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }

   // User excludes special characters
   if (inputLowerCase === true && inputUpperCase === true && inputNumeric === false && inputSpecial === false) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += noSpecChar.charAt(Math.floor(Math.random() * noSpecChar.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


   // User excludes upper case and numbers
   if (inputLowerCase === true && inputUpperCase === false && inputNumeric === false && inputSpecial === true) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += noUpNum.charAt(Math.floor(Math.random() * noUpNum.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


   // User excludes all letter characters
   if (inputLowerCase === false && inputUpperCase === false && inputNumeric === true && inputSpecial === true) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += noLet.charAt(Math.floor(Math.random() * no.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


   // User excludes lower case and numbers
   if (inputLowerCase === false && inputUpperCase === true && inputNumeric === false && inputSpecial === true) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += noLowNum.charAt(Math.floor(Math.random() * noLowNum.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


   // User excludes lower case and special characters
   if (inputLowerCase === false && inputUpperCase === true && inputNumeric === true && inputSpecial === false) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += upNum.charAt(Math.floor(Math.random() * upNum.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


   // User excludes upper case and special characters
   if (inputLowerCase === true && inputUpperCase === false && inputNumeric === true && inputSpecial === false) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += lowNum.charAt(Math.floor(Math.random() * lowNum.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


   // User excludes numbers and special characters
   if (inputLowerCase === true && inputUpperCase === true && inputNumeric === false && inputSpecial === false) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += lowUp.charAt(Math.floor(Math.random() * lowUp.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


  // User confirms only lower case
  if (inputLowerCase === true && inputUpperCase === false && inputNumeric === false && inputSpecial === false) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += letLow.charAt(Math.floor(Math.random() * letLow.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


  // User confirms only upper case
  if (inputLowerCase === false && inputUpperCase === true && inputNumeric === false && inputSpecial === false) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += letUp.charAt(Math.floor(Math.random() * letUp.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


  // User confirms only numbers
  if (inputLowerCase === false && inputUpperCase === false && inputNumeric === true && inputSpecial === false) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += nums.charAt(Math.floor(Math.random() * nums.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }


  // User confirms only special characters
  if (inputLowerCase === false && inputUpperCase === false && inputNumeric === false && inputSpecial === true) {
    function generatePassword(length) {
      var result = "";
      for (i=0; i<length; i++) {
        result += specChar.charAt(Math.floor(Math.random() * specChar.length));
      }
      return result;
    }
    document.querySelector("#password").innerHTML = generatePassword(inputLength);
  }

  


  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
