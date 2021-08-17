const Intern = require('../lib/intern');

//This variable defines fake paramaters to test the class. 
const intern = new Intern("Ralph", 14498, "ralph@ralph.com", "DePaul University");

//Cycles through the different parameters of the class. 
describe("Manager", () => {
    it("should return the interns school", () => {
        expect(intern.school).toEqual("DePaul University")
    });

    it("should return the interns school with the getSchool() function", () => {
        expect(intern.getSchool()).toEqual("DePaul University")
    });

    it("should return the Manager role with the getRole() function", () => {
        expect(intern.getRole()).toEqual("Intern")
    });
});