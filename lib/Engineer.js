const Employee = require('./Employee');            // importing Employee constructor 
class Engineer extends Employee {                 // engineer constructor extends employee constructor 
     constructor(name, id, email, github){
          super (name, id, email);                
          this.github = github;
     }
     getGithub () {
          return this.github;
     }
     getRole () {
          return 'Engineer';
     }
};
module.exports = Engineer;