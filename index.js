const Template = require('./src/template')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const managers = [];
const engineers = [];
const interns = [];
let totalCards =0;
let totalEngineers = 0;
let totalInterns = 0;

const promptEngineers = () => {
 return inquirer.prompt([
    {
        type: 'input',
        name: 'Engineer',
        message: 'Enter the name of the Engineer',
    },

    {
        type: 'input',
        name: 'Engineer-id',
        message: 'Enter the id of the Engineer',
    },

    {
        type: 'input',
        name: 'Engineer-email',
        message: 'Enter the email of the engineer',
    },

    {
        type: 'input',
        name: 'Engineer-Github',
        message: 'Enter the Github username of the Engineer',
    },

    {
        type: 'list',
        name: 'addemployee',
        message: 'Add more employee or finsih building your team?',
        choices: ["Add an Engineer", "Add an Intern", "Finsih building my team"],
    }

 ])
};

const promptInterns = () => {
 return inquirer.prompt([
    {
        type: 'input',
        name: 'Intern',
        message: 'Enter the name of the Intern',
    },

    {
        type: 'input',
        name: 'Intern-id',
        message: 'Enter the id of the Intern',
    },

    {
        type: 'input',
        name: 'Intern-email',
        message: 'Enter the email of the Intern',
    },

    {
        type: 'input',
        name: 'Intern-School',
        message: 'Enter the School name of the Intern',
    },

    {
        type: 'list',
        name: 'addemployee',
        message: 'Add more employee or finsih building your team?',
        choices: ["Add an Engineer", "Add an Intern", "Finsih building my team"],
    }

 ])
};

const promptManager = () => {
 return inquirer.prompt([
    {
        type: 'input',
        name: 'Manager',
        message: 'Enter the name of the Manager',
    },

    {
        type: 'input',
        name: 'Manager-id',
        message: 'Enter the id of the Manager',
    },

    {
        type: 'input',
        name: 'Manager-email',
        message: 'Enter the email of the Manager',
    },

    {
        type: 'input',
        name: 'Manager-office number',
        message: 'Enter the office number of the manager',
    },

    {
        type: 'list',
        name: 'addemployee',
        message: 'Add more employee or finsih building your team?',
        choices: ["Add an Engineer", "Add an Intern", "Finsih building my team"],
    }

 ])
};

const generateEngineers = () => {
    let cards = "";
    engineers.forEach(engineer => {
        let newEng = new Engineer(engineer.engineer, engineer.engid, engineer.engemail, engineer.enggithub)
    cards += 
    `<div class="col">
      <div class="card"
        <div class="card-header bg-danger text-white>
         <h1>${newEng.name}</h1>
         <h2 class="card-title">${newEng.getRole()}</h2>
        </div>
       <div class="card-body">
         <ul class="list-group">
          <li class="list-group-item">ID: ${newEng.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${newEng.email}" target="_blanc"</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${newEng.github}" target="_blanc"</li>
         </ul>
       </div>
      </div>
     </div>`  
})

return cards;
};

const generateInterns = () => {
    let cards = "";
    interns.forEach(intern => {
        let newInt = new Intern(intern.intern, intern.intid, intern.intemail, intern.intschool)
    cards += 
    `<div class="col">
      <div class="card"
       <div class="card-header bg-warning text-white>
         <h1>${newInt.name}</h1>
         <h2 class="card-title">${newInt.getRole()}</h2>
       </div>
       <div class="card-body">
         <ul class="list-group">
          <li class="list-group-item">ID: ${newInt.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${newInt.email}" target="_blanc"</a></li>
          <li class="list-group-item">School: ${newInt.school}"</li>
         </ul>
       </div>
      </div>
     </div>`  
})
return cards;
};

const generateHTML = async () => {
    totalEngineers = engineers.length;
    totalInterns = interns.length;
    totalCards = totalEngineers = totalInterns + 1;

    let mgr = new Template(managers[0].manager, managers[0].mgrid, managers[0].mgremail, totalCards);

    fs.writeFile(`./dist/index.html`, 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
      <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
      <div class="container">
        <div class="row">
         <div class="col header bg-info text-white text-center">
          <h1>TEAM PROFILE GENERATOR</h1>
         </div>
        </div>
        <div class="row">
          <div class="col">
           ${mgr.generateManager(managers[0].mgroffice)} 
          </div>
          <div class="col"
           ${generateEngineers()}
          </div>
          <div class="col"
           ${generateInterns()}
          </div>
        </div>
        <div class="row">
         <div class="col footer text-white text-center bg-secondary rounded-bottom">
          <p>Copyright &copy; 2021 </p>
          </div>
         </div>
      </div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
      <script src="../index.js"></script>
    </body>
    </html>
    `, (err) => err ? console.log(err) : console.log('index.html file successfully created'))
};

const addEngineer = async () => {
    const eng = await promptEngineers();
    const {engineer, engid, engemail, enggithub, addemployee} = eng;
    engineers.push(eng);

    if(eng.addemployee === "Add an Engineer") {
        addEngineer();
    }else if(eng.addemployee === "Add an Intern") {
        addIntern();
    }else{
        generateHTML();
    }
};

const addIntern = async () => {
    const newintern = await promptInterns();
    const {intern, intid, intemail, intschool, addemployee} = newintern;
    interns.push(newintern);

    if(newintern.addemployee === "Add an Engineer") {
        addEngineer();
    }else if(newintern.addemployee === "Add an Intern") {
        addIntern();
    }else{
        generateHTML();
    }
};

const addManager = async () => {
    const mgrs = await promptManager();
    const {manager, mgrid, mgremail, mgroffice, addemployee} = mgrs;
    managers.push(mgrs);

    if(mgrs.addemployee === "Add an Engineer") {
        addEngineer();
    }else if(mgrs.addemployee === "Add an Intern") {
        addIntern();
    }else{
        generateHTML();
    }
};

addManager();