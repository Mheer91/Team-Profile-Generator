const Intern = require('../lib/intern');
const intern = new Intern("Ralph", 14498, "ralph@ralph.com", "DePaul University");

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