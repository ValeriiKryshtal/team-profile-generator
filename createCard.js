const createCardManager = function (manager) {
     console.log(manager)
     return `
     <div class="col-4 mt-4">
          <div class="card h-100">
               <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4><i class="material-icons">content_paste</i>
               </div>
               <div class="card-body">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office">Office Number: ${manager.officeNumber}</p>
               </div>
          </div>
     </div>
     `;
};

createCard = (data) => {
     pageArray = []; 
     for (let i = 0; i < data.length; i++) {
          const employee = data[i];
     if (role === 'Manager') {
          const managerCard = generateManager(employee);
          pageArray.push(managerCard);
     }
     if (role === 'Engineer') {
          const engineerCard = generateEngineer(employee);
          pageArray.push(engineerCard);
     }
     if (role === 'Intern') {
          const internCard = generateIntern(employee);
          pageArray.push(internCard);
     }
     }
     const employeeCards = pageArray.join('')
     const generateTeam = generateTeamPage(employeeCards); 
     return generateTeam; 
}
module.exports = createCard;


