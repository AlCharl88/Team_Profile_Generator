const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id and email property set", () => {
            const name = "Alain Tagne";
            const id = 1234;
            const email = "alctagne@gmail.com";
            const emp = new Employee(name, id, email);

            expect(emp.name).toEqual("Alain Tagne");
            expect(emp.id).toEqual(1234);
            expect(emp.email).toEqual("alctagne@gmail.com");
        })
    });

    describe('getRole', () => {
        it("should return the Employee role", () => {
            const name = "Alain Tagne";
            const id = 1234;
            const email = "alctagne@gmail.com";
            const emp = new Employee(name, id, email);
            const result = emp.getRole();

            expect(result).toEqual("Employee");
        })
    });
});