const inquirer = require('inquirer');
const fs = require('fs');
const htmlData = require('./htmldata');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');


  // TODO: Create a function to write HTML file
  function writeToFile(data) {


    fs.writeFile('index.html', data, (err)=>
    err ? console.log("error") : console.log('HTML Created!'))
  
  }

//Team manager = name, employeeID, email, office#
//Engineer = name, employeeID, email, github 
//Intern = 




  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the team memebers name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the employee ID?',
      name: 'employeeID',
    },
    {
      type: 'input',
      message: 'What is the email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linkedin',
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your Image URL?',
      name: 'image',
    },
  ])
  .then((data) => {
    console.log(data.name)
    console.log(data.bio)
    console.log(data.github)

    writeToFile(userData(data));
  })

