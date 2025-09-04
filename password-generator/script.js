//use console to generate passsword
const length = 12;
const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890[{/.,#2!@";

let password = "";

for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * charset.length);

  password += charset[randomIndex];
}

console.log("pass", password);
