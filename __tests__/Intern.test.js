const Intern = require("../src/Intern");

describe("Intern", () => {
    it("should have a school property and a getSchool method", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tSch = "UNCC";
        const tInt = new Intern(tName, tId, tEmail, tSch);

        expect(tInt.getSchool()).toEqual(tSch);
    });

    it("should have a getRole method that returns 'Intern'", () => {
        const tName = "Bob";
        const tId = "15";
        const tEmail = "Bob@gmail.com";
        const tSch = "UNCC";
        const tInt = new Intern(tName, tId, tEmail, tSch);

        expect(tInt.getRole()).toEqual("Intern");
    });
});
