const Employee = require('../lib/employee');
const employee = new Employee("Ralph", 14498, "ralph@ralph.com");

describe("Employee", () => {
    it("should return the employees name", () => {
        expect(employee.name).toEqual("Ralph");
    });

    it("should return the employees ID", () => {
        expect(employee.id).toEqual(14498);
    });

    it("should return the employees Email", () => {
        expect(employee.email).toEqual("ralph@ralph.com");
    });

    it("should return the employees name using the getName() function", () => {
        expect(employee.getName()).toEqual("Ralph");
    });

    it("should return the employees id using the getId() function", () => {
        expect(employee.getId()).toEqual(14498);
    });

    it("should return the employees email using the getEmail() function", () => {
        expect(employee.getEmail()).toEqual("ralph@ralph.com");
    });

    it("should return the employees role using the getRole() function", () => {
        expect(employee.getRole()).toEqual("Employee");
    });

});