function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const allCharacters = uppercaseLetters + lowercaseLetters + numbers;

  let password = "";

  password +=
    uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  password +=
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];

  for (let i = 3; i < length; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  console.log(password);
}
const password = generateRandomPassword(20);
