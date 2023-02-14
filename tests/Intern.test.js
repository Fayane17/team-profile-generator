const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Fayane', 17, 'Fayane.jean17@gmail.com', 'Funtom Corporation University');
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Fayane', 17, 'Fayane.jean17@gmail.com', 'Funtom Corporation University');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Fayane', 17, 'Fayane.jean17@gmail.com.com', 'Funtom Corporation University');
    expect(intern.getRole()).toEqual("Intern");
}); 