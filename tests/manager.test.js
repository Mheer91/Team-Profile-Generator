const Manager = require('../lib/manager');

//This variable defines fake paramaters to test the class. 
const manager = new Manager("Ralph", 14498, "ralph@ralph.com", "Office 14A");

//Cycles through the different parameters of the class. 
describe("Manager", () => {
    it("should return the managers office number", () => {
        expect(manager.officeNumber).toEqual("Office 14A")
    });

    it("should return the managers office number with the getOfficeNumber() function", () => {
        expect(manager.getOfficeNumber()).toEqual("Office 14A")
    });

    it("should return the Manager role with the getRole() function", () => {
        expect(manager.getRole()).toEqual("Manager")
    });
});