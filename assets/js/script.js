// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate Password

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
    var pwd = "";

    // Loop through 4 variables to produce password options

    for (i = 0; i < pwdLength; i++) {
      console.log(i + ") New Password: " + newPwdString);
      if (pwdUpCase === true) {
        newPwdString += uppercase.charAt(Math.floor(Math.random() * 10));
      } if (pwdLwrCase === true) {
        newPwdString += lowercase.charAt(Math.floor(Math.random() * 10));
      } if (pwdNumber === true) {
        newPwdString += number.charAt(Math.floor(Math.random() * 10));
      } if (pwdSpecChar === true) {
        newPwdString += specChar.charAt(Math.floor(Math.random() * 10));
      }      
    }

    // Reduce password to requested length
    
    for (i = 0; i < pwdLength; i++) {
      console.log(i + ") New Password: " + pwd);
      pwd += newPwdString.charAt(Math.floor(Math.random() * newPwdString.length))
    }

    return pwd;

  } else {
    alert("Password is NOT between 8 and 128 charcters.")
    return pwd ="Password is NOT between 8 and 128 charcters.";
  }
}

generateBtn.addEventListener("click", writePassword);
