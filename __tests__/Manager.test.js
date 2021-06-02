const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email  and office number property set", () => {
            const name = "Alain Tagne";
            const id = 1237;
            const email = "alctagne@gmail.com";
            const officeNumber = 8627039293
            const mgr = new Manager(name, id, email, officeNumber);

            expect(mgr.name).toEqual("Alain Tagne");
            expect(mgr.id).toEqual(1237);
            expect(mgr.email).toEqual("alctagne@gmail.com");
            expect(mgr.officeNumber).toEqual(8627039293);

        })
    });

    describe('getRole', () => {
        it("should return the Manager role", () => {
            const name = "Alain Tagne";
            const id = 1237;
            const email = "alctagne@gmail.com";
            const officeNumber = 8627029293
            const emp = new Manager(name, id, email, officeNumber);
            const result = emp.getRole();

            expect(result).toEqual("Manager");
        })
    });
});