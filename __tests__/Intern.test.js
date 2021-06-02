const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id and email property set", () => {
            const name = "Stacy Joyce";
            const id = 1236;
            const email = "stacyjoyce@gmail.com";
            const school = "Polson";
            const student = new Intern(name, id, email, school);

            expect(student.name).toEqual("Stacy Joyce");
            expect(student.id).toEqual(1236);
            expect(student.email).toEqual("stacyjoyce@gmail.com");
            expect(student.school).toEqual("Polson");
        })
    });

    describe('getRole', () => {
        it("should return the Intern role", () => {
            const name = "Stacy Joyce";
            const id = 1236;
            const email = "nobodem@gmail.com";
            const school = "Polson";
            const student = new Intern(name, id, email, school);
            const result = student.getRole();

            expect(result).toEqual("Intern");
        })
    });

    describe('getSchool', () => {
        it('should return the school name of the intern', () => {
            const name = "Stacy Joyce";
            const id = 1236;
            const email = "stacyjoyce@gmail.com";
            const school = "Polson";
            const student = new Intern(name, id, email, school);
            const result = student.getSchool();

            expect(result).toEqual("Polson");
        })
    });
});