const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "index.html");
const generateHTML = require('./src/template');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
var myTeam = [];

function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What employee would you like to add to your team.",
      name: "addEmployee",
      choices: ["Manager", "Engineer", "Intern", "Done adding members."]
    }]).then(function (userInput) {
      switch(userInput.addEmployee) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }

function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "name",
      message: "Please enter the manager's name."
    },

    {
      type: "input",
      name: "id",
      message: "Please enter the manager's employee ID number."
    },

    {
      type: "input",
      name: "email",
      message: "Please enter the manager's email address."
    },

    {
      type: "input",
      name: "officeNumber",
      message: "Please enter the manager's office number."
    }

  ]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    myTeam.push(manager);
    createTeam();
  });

}


function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "name",
        message: "Please enter the engineer's name."
      },

      {
        type: "input",
        name: "id",
        message: "Please enter the engineer's employee ID number." 
      },

      {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email address."
      },

      {
        type: "input",
        name: "github",
        message: "Please enter the engineer's GitHub username."
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      myTeam.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "name",
        message: "Please enter the intern's name."
      },

      {
        type: "input",
        name: "id",
        message: "Please enter the intern's employee ID number." 
      },

      {
        type: "input",
        name: "email",
        message: "Please enter the intern's email address."
      },

      {
        type: "input",
        name: "school",
        message: "Please enter the name of the intern's school."
      }

    ]).then(answers => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      myTeam.push(intern);
      createTeam();
    });

  }

function htmlBuilder () {
    console.log("Your team profile has been successfully created! Please check out the index.html")

    fs.writeFileSync(outputPath, generateHTML(myTeam), "UTF-8")

}

createTeam();

