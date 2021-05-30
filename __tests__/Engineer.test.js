const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create an object with a name, id and email property set", () => {
            const name = "Alain Tagne";
            const id = 1235;
            const email = "alctagne@gmail.com";
            const engineer = new Engineer(name, id, email);

            expect(engineer.name).toEqual("Alain Tagne");
            expect(engineer.id).toEqual(1235);
            expect(engineer.email).toEqual("alctagne@gmail.com");
        })
    });

    describe('getRole', () => {
        it("should return the Engineer role", () => {
            const name = "Alain Tagne";
            const id = 1235;
            const email = "alctagne@gmail.com";
            const employee = new Engineer(name, id, email, "Alcharl88");
            const result = employee.getRole();

            expect(result).toEqual("Engineer");
        })
    });

    describe('getGitHub', () => {
        it('should return the Github username of the new employee', () => {
            const name = "Alain Tagne";
            const id = 1235;
            const email = "alctagne@gmail.com";
            const employee = new Engineer(name, id, email, "Alcharl88");
            const result = employee.getGithub();

            expect(result).toEqual("Alcharl88");
        })
    });
});