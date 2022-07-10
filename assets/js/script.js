// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var pwdLength = window.prompt("How many characters do you require in your password? - Password should be at least 8 characters and no more than 128 characters");

  if (pwdLength > 7 && pwdLength < 129) {
    var pwdUpCase = confirm("Does your password require uppercase letters? - OK = Yes; Cancel = No");
    var pwdLwrCase = confirm("Does your password require lowercase letters? - OK = Yes; Cancel = No");
    var pwdSpecChar = confirm("Does your password require special characters? - OK = Yes; Cancel = No");
    var pwdNumber = confirm("Does your password require special Numbers? - OK = Yes; Cancel = No");
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var number = "0123456789";
    var specChar = "~!@#$%^&*()_+-=<>?,.\/";
    var newPwdString = "";

    if (pwdUpCase === true && pwdLwrCase === true && pwdNumber === true && pwdSpecChar === true) {
      newPwdString = uppercase + lowercase + number + specChar;
    } else if (pwdUpCase === true && pwdLwrCase === true && pwdNumber === true) {
      newPwdString = uppercase + lowercase + number;
    } else if (pwdUpCase === true && pwdLwrCase === true && pwdSpecChar === true) {
      newPwdString = uppercase + lowercase + specChar;
    } else if (pwdUpCase === true && pwdSpecChar === true && pwdNumber === true) {
      newPwdString = uppercase + number + specChar;
    } else if (pwdLwrCase === true && pwdSpecChar === true && pwdNumber === true) {
      newPwdString = lowercase + number + specChar;
    } else if (pwdNumber === true && pwdSpecChar === true) {
      newPwdString = number + specChar;
    } else if (pwdLwrCase === true && pwdNumber === true) {
      newPwdString = lowercase + number;
    } else if (pwdUpCase === true && pwdLwrCase === true) {
      newPwdString = uppercase + lowercase;
    } else if (pwdUpCase === true && pwdNumber === true) {
      newPwdString = uppercase + number;
    } else if (pwdUpCase === true && pwdSpecChar === true) {
      newPwdString = uppercase + specChar;
    } else if (pwdLwrCase === true && pwdSpecChar === true) {
      newPwdString = lowercase + specChar;
    } else if (pwdUpCase === true && pwdSpecChar === true) {
      newPwdString = uppercase + specChar;
    } else if (pwdUpCase === true) {
      newPwdString = uppercase;
    } else if (pwdLwrCase === true) {
      newPwdString = lowercase;
    } else if (pwdNumber === true) {
      newPwdString = number;
    } else if (pwdSpecChar === true) {
      newPwdString = specChar;
    } else {

      return alert("Uppercase, Lowercase, Number and/or Special Character is required to generate a password.");
    }

    

  } else {
    alert("Password is NOT between 8 and 128 charcters.")
    return;
  }
}


generateBtn.addEventListener("click", writePassword);
