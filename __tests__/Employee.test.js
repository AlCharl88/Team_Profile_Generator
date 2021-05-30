const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create an object with a name, id and email property set", () => {
            const name = "Alain Tagne";
            const id = 1234;
            const email = "alctagne@gmail.com";
            const employee = new Employee(name, id, email);

            expect(employee.name).toEqual("Alain Tagne");
            expect(employee.id).toEqual(1234);
            expect(employee.email).toEqual("alctagne@gmail.com");
        })
    });

    describe('getRole', () => {
        it("should return the Employee role", () => {
            const name = "Alain Tagne";
            const id = 1234;
            const email = "alctagne@gmail.com";
            const employee = new Employee(name, id, email);
            const result = employee.getRole();

            expect(result).toEqual("Employee");
        })
    });
});