const Manager = require('../lib/Manager');
test('Checking how a new object is created based on the Manager class',
     ()=>{
          const manager = new Manager('Hrun', 777, 'hrun@gmail.com', 77)
          expect(manager.name).toBe('Hrun');
          expect(manager.id).toBe(777);
          expect(manager.email).toBe('hrun@gmail.com');
          expect(manager.officeNumber).toBe(77);
     }
);
test('Check if the id is returned to us when creating an object',
     () => {
          const manager = new Manager('Hrun', 777, 'hrun@gmail.com', 7)
          expect(manager.getId()).toBe(777);
     }
);
test('Check if the email is returned to us when creating an object',
     () => {
          const manager = new Manager('Hrun', 777, 'hrun@gmail.com', 7)
          expect(manager.getEmail()).toBe('hrun@gmail.com');
     }
);
test('Check if the name is returned to us when creating an object',
     () => {
          const manager = new Manager('Hrun', 777, 'hrun@gmail.com', 7)
          expect(manager.getName()).toBe('Hrun');
     }
);
test('Check if the role is returned to us when creating an object',
     () => {
          const manager = new Manager('Hrun', 777, 'hrun@gmail.com', 7)
          expect(manager.getRole()).toBe('Manager');
     }
);