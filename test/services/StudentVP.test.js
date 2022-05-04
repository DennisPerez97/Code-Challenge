const StudentVP = require("./../../lib/services/StudentVP");

describe("Test para StudentVP",() =>{
    test("Requerimiento 1: Calcular todos los estudiantes en una mision",() => {
        const student = [{nombre: "Hola", email: "Howell@visualpartnership.xyz"}];
        const expected = ["Howell@visualpartnership.xyz"];

        const studentByEmail = StudentVP.getStudentsEmail(student,"Howell@visualpartnership.xyz");
        expect(studentByEmail).toEqual(expect.arrayContaining(expected));

    });
});


describe("Test para StudentVP: getStudentsWithCertification",() =>{
    test("Requerimiento 1: Calcular todos los estudiantes en una misiocon certificado",() => {
        const student = [{nombre: "Hola", email: "Howell@visualpartnership.xyz", haveCertification: true}];
        const expected = student;

        const studentWithCertification = StudentVP.getStudentsWithCertification(student);
        expect(studentWithCertification).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: getStudentsWithCertification",() =>{
    test("Requerimiento 2: Calcular todos los estudiantes con certificado, prueba con vacio",() => {
        const student = [{nombre: "Hola", email: "Howell@visualpartnership.xyz", haveCertification: ""}];
        const expected = [];

        const studentWithCertification = StudentVP.getStudentsWithCertification(student);
        expect(studentWithCertification).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: getStudentsWithCertification",() =>{
    test("Requerimiento 3: Calcular todos los estudiantes con certificado, prueba con un numero",() => {
        const student = [{nombre: "Hola", email: "Howell@visualpartnership.xyz", haveCertification: 2}];
        const expected = [];

        const studentWithCertification = StudentVP.getStudentsWithCertification(student);
        expect(studentWithCertification).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: getStudentsWithCertification",() =>{
    test("Requerimiento 4: Calcular todos los estudiantes con certificado, prueba sin atributo",() => {
        const student = [{nombre: "Hola", email: "Howell@visualpartnership.xyz"}];
        const expected = [];

        const studentWithCertification = StudentVP.getStudentsWithCertification(student);
        expect(studentWithCertification).toEqual(expect.arrayContaining(expected));

    });
});