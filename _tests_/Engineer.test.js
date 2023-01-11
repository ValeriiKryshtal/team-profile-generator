const Engineer = require('../lib/Engineer');
test('Checking how a new object is created based on the Engineer class',
     ()=>{
          const engineer = new Engineer('Hrun', 777, 'hrun@gmail.com')
          expect(engineer.name).toBe('Hrun');
          expect(engineer.id).toBe(777);
          expect(engineer.email).toBe('hrun@gmail.com');
     }
);
test('Check if the id is returned to us when creating an object',
     () => {
          const engineer = new Engineer('Hrun', 777, 'hrun@gmail.com', 'Homk')
          expect(engineer.getId()).toBe(777);
     }
);
test('Check if the email is returned to us when creating an object',
     () => {
          const engineer = new Engineer('Hrun', 777, 'hrun@gmail.com', 'Homk')
          expect(engineer.getEmail()).toBe('hrun@gmail.com');
     }
);
test('Check if the name is returned to us when creating an object',
     () => {
          const engineer = new Engineer('Hrun', 777, 'hrun@gmail.com', 'Homk')
          expect(engineer.getName()).toBe('Hrun');
     }
);
test('Check if the github is returned to us when creating an object',
     () => {
          const engineer = new Engineer('Hrun', 777, 'hrun@gmail.com', 'Homk')
          expect(engineer.getGithub()).toBe('Homk');
     }
);
test('Check if the role is returned to us when creating an object',
     () => {
          const engineer = new Engineer('Hrun', 777, 'hrun@gmail.com', 'Homk')
          expect(engineer.getRole()).toBe('Engineer');
     }
);