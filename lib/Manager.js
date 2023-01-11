const Employee = require('./Employee');                // importing Employee constructor 
class Manager extends Employee {                       // manager constructor extends employee constructor
     constructor(name, id, email, officeNumber){
          super (name, id, email);                     // sending data to the parent
          this.officeNumber = officeNumber;
     }          
     getRole () {
          return "Manager";                            // set employee role to manager 
     }
}
module.exports = Manager; 
