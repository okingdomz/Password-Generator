var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@','#','$','%','^','&','*','(',')','<','>', ];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];


// Assignment Code
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctprompts = getprompt();  //return true or false? if false they put in wrong password
  var passwordText = document.querySelector("#password");

  if(correctprompts) {
    var newpassword = generatePassword();
    passwordText.value = newpassword;
  } else {
    passwordText.value = "";
  }

}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++ ) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;

}

function getprompt() {  // prompt function
  choiceArr = [];
  characterLength = parseInt(prompt("How many charcaters do you want in your password? (8 - 128 charcaters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength >128) { //hoping its false
    alert("Character length has to be a number, 8 - 128 digits. Please try again. ")
    return false;

  }

  if(confirm(" would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if(confirm(" would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if(confirm(" would you like special letters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if(confirm(" would you like numbers  in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}