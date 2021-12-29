// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

var inputLength = prompt("Please choose a password length between 8 and 128 characters");

  while (inputLength < 8 || inputLength > 128 || isNaN(inputLength) == true) {
    if (inputLength < 8 || inputLength > 128 || isNaN(inputLength) == true)  {
      var inputLength = prompt("Please choose a password length between 8 and 128 characters");
    }
  }

  var inputLowerCase = confirm("Click OK to include lowercase letters,\nCancel to exclude lowercase letters");
  var inputUpperCase = confirm("Click OK to include lowercase letters,\nCancel to exclude lowercase letters");
  
  console.log(inputLength);
  console.log(typeof(inputLength));

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
