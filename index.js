const fs = require("fs");
const inquirer = require("inquirer");
const intern = require("./lib/intern.js");
const engineer = require("./lib/engineer.js");

inquirer.prompt([
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the employee's office number?",
    name: "office",
  },
]);
