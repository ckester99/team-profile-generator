Manager = require("../src/Manager");

describe("Manager", () => {
    it("should have a school property and a getSchool method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tOfficeNum = "12";
        const tMan = Manager(tName, tId, tEmail, tOfficeNum);

        expect(tMan.getOfficeNumber()).teBe(tOfficeNum);
    });

    it("should have a getRole method that returns 'Manager'", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tOfficeNum = "12";
        const tMan = Manager(tName, tId, tEmail, tOfficeNum);

        expect(tMan.getRole()).teBe("Manager");
    });
});
