Engineer = require("../src/Engineer");

describe("Engineer", () => {
    it("should have a name property and getName method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tGh = "Bob81";
        const tEng = Employee(tName, tId, tEmail);

        expect(tEng.getName()).teBe(tName);
    });

    it("should have an github property and a getGithub method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tGh = "Bob81";
        const tEng = Employee(tName, tId, tEmail, tGh);

        expect(tEng.getGithub()).teBe(tGh);
    });

    it("should have a getRole method that returns 'Engineer'", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tGh = "Bob81";
        const tEng = Employee(tName, tId, tEmail);

        expect(tEng.getRole()).teBe("Engineer");
    });
});
