const password = require("password-gen-v1");

const pass = password.newPassword(8, "esha@1234");


console.log("Generated password is",pass);
