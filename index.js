const inquirer = require('inquirer');
const fs = require('fs');
const employees = [];
const generateTemplate = require("./src/generateTemplate");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


//Primary questions for the team cards.
function createEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: "What role would you like to create?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "role"
        },
        {
            type: "input",
            message: "Enter employee's name?",
            name: "name",
            validate: string => string.length > 0 ? true : "Please enter a name for the employee!"
        },
        {
            type: "input: number",
            message: "What is the employee's ID number?",
            name: "id",
            validate: string => string.length > 0 ? true : "Please enter an ID for the employee!"
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "email",
            validate: string => string.length > 0 ? true : "Please enter an email address for the employee!",
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber",
            when: response => response.role === "Manager"
        },
        {
            type: "input",
            message: "What is the intern's university?",
            name: "school",
            when: response => response.role === "Intern"
        },
        {
            type: "input",
            message: "What is the engineer's GitHub?",
            name: "github",
            when: response => response.role === "Engineer"
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github",
            when: response => response.role === "Engineer"
        }
    ])
    //This promise adds the new employees to an empty array to be read later.
    .then((response) => {
        if (response.role === "Manager"){
            employees.push(new Manager(response.name, response.id, response.email, response.officeNumber));
            console.log(employees);
        }
        else if (response.role === "Engineer"){
            employees.push(new Engineer(response.name, response.id, response.email, response.github));
            console.log(employees);
        }
        else if (response.role === "Intern"){
            employees.push(new Intern(response.name, response.id, response.email, response.school));
            console.log(employees);
        }
        //Allows user to continue adding employees or end.
        inquirer.prompt([
            {
                type: "confirm",
                message: "Would you like to add another employee?",
                name: "addEmployee"
            }
        ])
        .then((check) => {
            if (check.addEmployee === true){
                createEmployee()
            }
            else {
                newTeam(employees)
            }
        })
    })
};

//Writes the HTML file with the employee information. 
function newTeam(employees) {
    fs.writeFile(`team.html`, generateTemplate(employees), (err) => err ? console.error(err) : console.log("dad"));
   
};

//Initiates the prompts 
createEmployee();

