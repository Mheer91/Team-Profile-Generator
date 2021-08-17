const Engineer = require('../lib/engineer');

//This variable defines fake paramaters to test the class. 
const engineer = new Engineer("Ralph", 14498, "ralph@ralph.com", "github.io/ralph");

//Cycles through the different parameters of the class. 
describe("Engineer", () => {
    it("should return the engineers github link", () => {
        expect(engineer.github).toEqual("github.io/ralph")
    });

    it("should return the engineers github link with the getGithub() function", () => {
        expect(engineer.getGithub()).toEqual("github.io/ralph")
    });

    it("should return the Engineer role with the getRole() function", () => {
        expect(engineer.getRole()).toEqual("Engineer")
    });
});