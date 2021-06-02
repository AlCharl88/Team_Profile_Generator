const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id and email property set", () => {
            const name = "Alain Tagne";
            const id = 1235;
            const email = "alctagne@gmail.com";
            const github = "Alcharl88"
            const eng = new Engineer(name, id, email, github);

            expect(eng.name).toEqual("Alain Tagne");
            expect(eng.id).toEqual(1235);
            expect(eng.email).toEqual("alctagne@gmail.com");
            expect(eng.github).toEqual("Alcharl88");

        })
    });

    describe('getRole', () => {
        it("should return the Engineer role", () => {
            const name = "Alain Tagne";
            const id = 1235;
            const email = "alctagne@gmail.com";
            const github = "Alcharl88"
            const emp = new Engineer(name, id, email, github);
            const result = emp.getRole();

            expect(result).toEqual("Engineer");
        })
    });

    describe('getGitHub', () => {
        it('should return the Github username of the new employee', () => {
            const name = "Alain Tagne";
            const id = 1235;
            const email = "alctagne@gmail.com";
            const github = "Alcharl88"
            const emp = new Engineer(name, id, email, github);
            const result = emp.getGithub();

            expect(result).toEqual("Alcharl88");
        })
    });
});