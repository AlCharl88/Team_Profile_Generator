const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const fs = require("fs");
const { off } = require("process");

class Template {
    constructor(name, id, email, totalCards) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.totalCards = totalCards;
    }

    generateManager(office) {
        let card = "";
        let newMgr = new Manager(this.name,this.id,this.email,office);

        card = 
        `<div class="card">
           <div class="card-header bg-success text-white>
             <h1>${this.name}</h1>
             <h2>${newMgr.getRole()}</h2>
           </div>
           <div class="card-body">
             <ul class="list-group">
              <li class="list-group-item">ID: ${newMgr.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${newMgr.email}" target="_blanc"</a></li>
              <li class="list-group-item">Office number: ${newMgr.officeNumber}</li>
             </ul>
           </div>
        </div>`

         return card;
    }
}

module.exports = Template;



 
  