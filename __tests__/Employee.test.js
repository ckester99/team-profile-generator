const Employee = require("../src/Employee");

describe("Employee", () => {
    it("should have a name property and getName method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tEmp = new Employee(tName, tId, tEmail);

        expect(tEmp.getName()).toEqual(tName);
    });

    it("should have an id property and a getId method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tEmp = new Employee(tName, tId, tEmail);

        expect(tEmp.getId()).toEqual(tId);
    });

    it("should have an email property and a getEmail method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tEmp = new Employee(tName, tId, tEmail);

        expect(tEmp.getEmail()).toEqual(tEmail);
    });

    it("should have a getRole method that returns 'Employee'", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tEmp = new Employee(tName, tId, tEmail);

        expect(tEmp.getRole()).toEqual("Employee");
    });
});
