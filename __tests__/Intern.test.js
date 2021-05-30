const Intern = require('../lib/Intern');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create an object with a name, id and email property set", () => {
            const name = "Stacy Joyce";
            const id = 1236;
            const email = "alctagne@gmail.com";
            const intern = new Intern(name, id, email, "Polson");

            expect(intern.name).toEqual("Alain Tagne");
            expect(intern.id).toEqual(1236);
            expect(intern.email).toEqual("nobodem@gmail.com");
        })
    });

    describe('getRole', () => {
        it("should return the Intern role", () => {
            const name = "Stacy Joyce";
            const id = 1236;
            const email = "nobodem@gmail.com";
            const intern = new Intern(name, id, email, "Polson");
            const result = intern.getRole();

            expect(result).toEqual("Intern");
        })
    });

    describe('getSchool', () => {
        it('should return the school name of the intern', () => {
            const name = "Stacy Joyce";
            const id = 1236;
            const email = "nobodem@gmail.com";
            const intern = new Intern(name, id, email, "Polson");
            const result = intern.getSchool();

            expect(result).toEqual("Polson");
        })
    });
});