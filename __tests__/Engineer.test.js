const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should have an github property and a getGithub method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tGh = "Bob81";
        const tEng = new Engineer(tName, tId, tEmail, tGh);

        expect(tEng.getGithub()).toEqual(tGh);
    });

    it("should have a getRole method that returns 'Engineer'", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tGh = "Bob81";
        const tEng = new Engineer(tName, tId, tEmail, tGh);

        expect(tEng.getRole()).toEqual("Engineer");
    });
});
