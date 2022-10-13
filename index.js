const inquirer = require('inquirer');
const fs = require('fs');
const htmlData = require('./htmldata');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const dataArray = []
console.log(dataArray);


// // TODO: Create a function to write HTML file
function writeToFile(dataArray) {
  fs.writeFile('index.html', dataArray, (err) =>
    err ? console.log("error") : console.log('HTML Created!'))

}

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


function managerData() {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the office number?',
        name: 'office',
      }])
}

function engineerData() {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the gitHub ID?',
        name: 'gitHub',
      }])
}

function internData() {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What school are they interning for?',
        name: 'school',
      }])
}

async function askAgain() {
  return inquirer
    .prompt([
      {
        type: 'confirm',
        message: 'Do you want to add another employee?',
        name: 'confirm',

      }])
}



async function init() {

  let addAnother = true

  while (addAnother) {
    let data = await employeeData()


    if (data.employeeType === "manager") {
      let x = await managerData()
      data = { ...data, ...x }
      dataArray.push(data)

    } else if (data.employeeType === "engineer") {
      let y = await engineerData()
      data = { ...data, ...y }
      dataArray.push(data)
    } else {
      let z = await internData()
      data = { ...data, ...z }
      dataArray.push(data)

    }

    let result = await askAgain()

    if (!result.confirm) {
      addAnother = false
      console.log(dataArray)
      console.log(dataArray.length)
      writeToFile(htmlData(dataArray))
    }

  }
}

init()
