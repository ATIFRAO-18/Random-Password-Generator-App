let SearchBox = document.querySelector(".search");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChar = "!@#$%^&*()_+";
let passwordLength = 16;
let fullPassword = uppercase + lowercase + numbers + specialChar;

function generatePassword() {
  let password = "";
  uppercasePassword = uppercase[Math.floor(Math.random() * uppercase.length)];
  lowercasePassword = lowercase[Math.floor(Math.random() * lowercase.length)];
  numbersPassword = numbers[Math.floor(Math.random() * numbers.length)];
  specialCharPassword =
    specialChar[Math.floor(Math.random() * specialChar.length)];

  while (passwordLength > password.length) {
    password =
      password + fullPassword[Math.floor(Math.random() * fullPassword.length)];
  }
  SearchBox.value = password;
  console.log(password);
}

function copy() {
  SearchBox.select();
  document.execCommand("copy");
}
//   console.log(uppercasePassword);
//   console.log(lowercasePassword);
//   console.log(numbersPassword);
//   console.log(specialCharPassword);
