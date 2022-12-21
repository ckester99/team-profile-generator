const generateHTML = require("./generateHTML.js");
const inquirer = require("inquirer");
const fs = require("fs");

const h = new generateHTML();

inquirer.prompt([
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
]);

/*
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "title",
        },
        {
            type: "input",
            message: "Input description",
            name: "desc",
        },
        {
            type: "input",
            message: "Input installation instructions",
            name: "installInst",
        },
        {
            type: "input",
            message: "Input usage information",
            name: "usageInfo",
        },
        {
            type: "input",
            message: "Input contribution guidelines",
            name: "contGuide",
        },
        {
            type: "input",
            message: "Input test instructions",
            name: "testInst",
        },
        {
            type: "list",
            message: "Choose License",
            name: "license",
            choices: ["apache2.0", "boost", "cc1.0", "gnu gpl v3"],
        },
        {
            type: "input",
            message: "Enter github username",
            name: "user",
        },
        {
            type: "input",
            message: "Enter email address",
            name: "email",
        },
    ])
    .then((r) => fs.writeFile("./utils/README.md", markdown.create(r), (e) => (e ? console.error(e.message) : console.log("Success!"))));
*/
