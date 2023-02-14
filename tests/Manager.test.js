const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Fayane', 17, 'Fayane.jean17@gmail.com', 72);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Fayane', 17, 'Fayane.jean17@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 