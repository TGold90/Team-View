const fs = require("fs");
const inquirer = require("inquirer");
const Intern = require("./lib/intern.js");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const genHTML = require("./utils/genHTML");

const teamMembers = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
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
  ])
  .then((response) => {
    const newManager = new Manager(
      response.name,
      response.id,
      response.email,
      response.office
    );
    teamMembers.push(newManager);
    askNextQuestion();
  });

const askNextQuestion = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add another employee?",
        name: "newMember",
        choices: ["engineer", "intern", "no more team members to add"],
      },
    ])
    .then((response) => {
      switch (response.newMember) {
        case "engineer":
          engineerQuestion();
          break;
        case "intern":
          internQuestion();
          break;
        default:
          writeHTML();
      }
    });
};

const engineerQuestion = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
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
        message: "What is the employee's GitHub username?",
        name: "gitHub",
      },
    ])
    .then((response) => {
      const newEngineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.gitHub
      );
      teamMembers.push(newEngineer);
      askNextQuestion();
    });
};

const internQuestion = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
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
        message: "Which school did the intern go to?",
        name: "school",
      },
    ])
    .then((response) => {
      const newIntern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      teamMembers.push(newIntern);
      askNextQuestion();
    });
};

const writeHTML = () => {
  const text = genHTML(teamMembers);
  fs.writeFileSync("dist/index.html", text);
};
