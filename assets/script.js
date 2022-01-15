// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = 0
var numbers = false
var capitals = false
var symbols = false

// Write password to the #password input
function writePassword() {

  pwlength = passwordLengthForm();
  pwchars = passwordPrompt();
  var password = generatePassword(pwlength, pwchars);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// creates function to generate password using random characters
 function generatePassword(pwlength, pwchars) {
   password = '';
   for (var i = 0; i < pwlength; i++){
      password = password + pwchars[Math.floor((Math.random() * pwchars.length))];
   } 
   return password;
}
// creates function prompting user for passwords complexity as well as if statements to include certain characters based on prompt selected
function passwordPrompt() {

  var pwchars = "abcdefghijklmnopqrstuvwxyz";
  numbers = confirm('Do you want numbers in your password?');
  symbols = confirm('Do you want symbols in your password?');
  capitals = confirm('Do you want capital letters in your password?');

  if (capitals == true) {
    pwchars = pwchars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  }
  if (numbers == true) {
  pwchars = pwchars + "0123456789";
  }
  if (symbols == true) {
    pwchars = pwchars + "`~!@#$%^&*()-_=+";
  }
  return pwchars;

}
// creates function to ask user how many characters for password and if else statement returning user to prompt for invalid entry
function passwordLengthForm() {
   
  passwordLength = prompt("How many characters would you like your password to be? (8-128)");

   if (passwordLength < 8 || passwordLength > 128 ) {
     window.alert("Not a valid entry. Please enter a value between 8 and 128");
     passwordLengthForm();
   }
   else return passwordLength;

  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
