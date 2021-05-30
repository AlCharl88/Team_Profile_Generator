const Manager = require('../lib/Manager');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create an object with a name, id, email  and office number property set", () => {
            const name = "Alain Tagne";
            const id = 1237;
            const email = "alctagne@gmail.com";
            const officeNumber = 8627029293
            const manager = new Manager(name, id, email, officeNumber);

            expect(manager.name).toEqual("Alain Tagne");
            expect(manager.id).toEqual(1237);
            expect(manager.email).toEqual("alctagne@gmail.com");
            expect(manager.officeNumber).toEqual(8627039293);

        })
    });

    describe('getRole', () => {
        it("should return the Manager role", () => {
            const name = "Alain Tagne";
            const id = 1237;
            const email = "alctagne@gmail.com";
            const officeNumber = 8627029293
            const employee = new Manager(name, id, email, officeNumber);
            const result = employee.getRole();

            expect(result).toEqual("Manager");
        })
    });
});