const StudentController = require("./../../lib/controllers/StudentController.js");

describe("Test para Controller: getStudent",() =>{
    test("Requerimiento 1: Calcular los estudiantes",() => {
        const students = StudentController.getStudent();
        expect(students.length).toBe(51);

    });
});

describe("Test para Controller: getStudentsByCertification",() =>{
    test("Requerimiento 2: Calcular los estudiantes con certificacion",() => {
        const students = StudentController.getStudentsByCertification();
        expect(students.length).toBe(29);

    });
});

describe("Test para Controller: getEmailStudentsByCertification",() =>{
    test("Requerimiento 3: Calcular el email de los estudiantes con certificado",() => {
        const students = StudentController.getEmailStudentsByCertification();
        expect(students.length).toBe(29);

    });
});

describe("Test para Controller: getStudentByCredits",() =>{
    test("Requerimiento 4: Calcular los estudiantes por creditos mayores a 500",() => {
        const students = StudentController.getStudentByCredits();
        expect(students.length).toBe(27);

    });
});