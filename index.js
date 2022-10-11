const inquirer = require('inquirer');
const fs = require('fs');
const htmlData = require('./htmldata');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');




const engineer1 = new Engineer('tarek',  '12', 'sdf@', 'git');
const intern1 = new Intern('sdf', '10', 'sdf', 'yt');
const manager1 = new Intern('man1', '19', 'fgh', 'yui');


// console.log(engineer1)
// console.log(intern1)
// console.log(manager1)

  // // TODO: Create a function to write HTML file
  // function writeToFile(data) {


  //   fs.writeFile('index.html', data, (err)=>
  //   err ? console.log("error") : console.log('HTML Created!'))
  
  // }


//Employee = name, employeeID, email
//Team manager = name, employeeID, email, office#
//Engineer = name, employeeID, email, github 
//Intern = name, employeeID, email, school



function employeeData() {
  return inquirer
  .prompt([
    {
      type: 'list',
      message: 'What type of employee?',
      name: 'employeeType',
      choices: ['manager', 'engineer', 'intern'],
    },
    {
      type: 'input',
      message: 'What is the employee name?',
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
    }

  ])
  
}

async function init () {

let data = await employeeData()
 console.log(data)

 if(data.employeeType === "manager") {
  console.log("this is a manager")
 }

}

init()