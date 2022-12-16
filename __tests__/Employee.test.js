Employee = require("../src/Employee");

describe("Employee", () => {
    it("should have a name property and getName method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tEmp = Employee(tName, tId, tEmail);

        expect(tEmp(getName())).teBe(tName);
    });

    it("should have an id property and a getId method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tEmp = Employee(tName, tId, tEmail);

        expect(tEmp(getId())).teBe(tId);
    });

    it("should have an email property and a getEmail method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tEmp = Employee(tName, tId, tEmail);

        expect(tEmp(getEmail())).teBe(tEmail);
    });
});
