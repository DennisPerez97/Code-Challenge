const StudentController = require("./../../lib/controllers/StudentController.js");

describe("Test para Controller: getStudent",() =>{
    test("Requerimiento 1: Calcular los estudiantes",() => {
        const students = StudentController.getStudent();
        expect(students.length).toBe(51);

    });
});

describe("Test para Controller: getStudent",() =>{
    test("Requerimiento 1: Calcular los estudiantes",() => {
        const students = StudentController.getStudentsByCertification();
        expect(students.length).toBe(29);

    });
});