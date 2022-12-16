Engineer = require("../src/Engineer");

describe("Engineer", () => {
    it("should have an github property and a getGithub method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tGh = "Bob81";
        const tEng = Engineer(tName, tId, tEmail, tGh);

        expect(tEng.getGithub()).teBe(tGh);
    });

    it("should have a getRole method that returns 'Engineer'", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tGh = "Bob81";
        const tEng = Engineer(tName, tId, tEmail, tGh);

        expect(tEng.getRole()).teBe("Engineer");
    });
});
