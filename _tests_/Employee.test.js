const Employee = require('../lib/Employee');
test('Checking how a new object is created based on the Employee class',
     ()=>{
          const member = new Employee('Hrun', 777, 'hrun@gmail.com')
          expect(member.name).toBe('Hrun');
          expect(member.id).toBe(777);
          expect(member.email).toBe('hrun@gmail.com');
     }
);
test('Check if the id is returned to us when creating an object',
     () => {
          const member = new Employee('Hrun', 777, 'hrun@gmail.com')
          expect(member.getId()).toBe(777);
     }
);
test('Check if the email is returned to us when creating an object',
     () => {
          const member = new Employee('Hrun', 777, 'hrun@gmail.com')
          expect(member.getEmail()).toBe('hrun@gmail.com');
     }
);
test('Check if the name is returned to us when creating an object',
     () => {
          const member = new Employee('Hrun', 777, 'hrun@gmail.com')
          expect(member.getName()).toBe('Hrun');
     }
);