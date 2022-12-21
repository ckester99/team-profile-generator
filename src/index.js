const GenerateHTML = require("./generateHTML.js");
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const h = new GenerateHTML();
let team = [];

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your manager's employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your manager's email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "officeNum",
        },
    ])
    .then((r) => {
        const teammate = new Manager(r.name, r.id, r.email, r.officeNum);
        team.push(teammate);
    })
    .then(giveChoices);

function giveChoices() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Add another team member?",
                name: "choice",
                choices: ["Add Engineer", "Add Intern", "Finish Team"],
            },
        ])
        .then((r) => {
            switch (r.choice) {
                case "Add Engineer":
                    addEngineer();
                    break;
                case "Add Intern":
                    addIntern();
                    break;
                case "Finish Team":
                    finishTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your engineer's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your engineer's employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your engineer's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is your engineer's github username?",
                name: "github",
            },
        ])
        .then((r) => {
            const teammate = new Engineer(r.name, r.id, r.email, r.github);
            team.push(teammate);
            giveChoices();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your intern's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your intern's employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your intern's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is your intern's school?",
                name: "school",
            },
        ])
        .then((r) => {
            const teammate = new Intern(r.name, r.id, r.email, r.school);
            team.push(teammate);
            giveChoices();
        });
}

function finishTeam() {
    console.log(team);
}
