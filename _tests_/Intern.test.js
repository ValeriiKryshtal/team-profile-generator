const Intern = require('../lib/Intern');
test('Checking how a new object is created based on the Intern class',
     ()=>{
          const intern = new Intern ('Hrun', 777, 'hrun@gmail.com')
          expect(intern.name).toBe('Hrun');
          expect(intern.id).toBe(777);
          expect(intern.email).toBe('hrun@gmail.com');
     }
);
test('Check if the id is returned to us when creating an object',
     () => {
          const intern = new Intern('Hrun', 777, 'hrun@gmail.com', 'Homk')
          expect(intern.getId()).toBe(777);
     }
);
test('Check if the email is returned to us when creating an object',
     () => {
          const intern = new Intern('Hrun', 777, 'hrun@gmail.com', 'Homk')
          expect(intern.getEmail()).toBe('hrun@gmail.com');
     }
);
test('Check if the name is returned to us when creating an object',
     () => {
          const intern = new Intern('Hrun', 777, 'hrun@gmail.com', 'Homk')
          expect(intern.getName()).toBe('Hrun');
     }
);
test('Check if the school is returned to us when creating an object',
     () => {
          const intern = new Intern('Hrun', 777, 'hrun@gmail.com', 'Homk')
          expect(intern.getSchool()).toBe('Homk');
     }
);
test('Check if the role is returned to us when creating an object',
     () => {
          const intern = new Intern('Hrun', 777, 'hrun@gmail.com', 'Homk')
          expect(intern.getRole()).toBe('Intern');
     }
);