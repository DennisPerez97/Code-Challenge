const StudentVP = require("./../../lib/services/StudentVP");

describe("Test para StudentVP: filterByCredits",() =>{
    test("Requerimiento 1: Calcular los estudiantes por creditos",() => {
        const student = [{nombre: "Hola", credits: 200},{nombre: "Hola", credits: 10}];
        const expected = [{nombre: "Hola", credits: 200}]

        const studentByEmail = StudentVP.filterByCredits(student,20);
        expect(studentByEmail).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: filterByCredits",() =>{
    test("Requerimiento 2: Calcular los estudiantes por creditos, con creditos en texto",() => {
        const student = [{nombre: "Hola", credits: "ola"}];
        const expected = []

        const studentByEmail = StudentVP.filterByCredits(student,20);
        expect(studentByEmail).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: filterByCredits",() =>{
    test("Requerimiento 3: Calcular los estudiantes por creditos, sin el atributo",() => {
        const student = [{nombre: "Hola"}];
        const expected = []

        const studentByEmail = StudentVP.filterByCredits(student,20);
        expect(studentByEmail).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: filterByCredits",() =>{
    test("Requerimiento 1: Calcular los estudiantes por creditos, funcion con creditos en texto",() => {
        const student = [{nombre: "Hola", credits: 200},{nombre: "Hola", credits: 10}];
        const expected = []

        const studentByEmail = StudentVP.filterByCredits(student,"a");
        expect(studentByEmail).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: filterByCredits",() =>{
    test("Requerimiento 1: Calcular los estudiantes por creditos,  funcion sin parametro creditos",() => {
        const student = [{nombre: "Hola", credits: 200},{nombre: "Hola", credits: 10}];
        const expected = []

        const studentByEmail = StudentVP.filterByCredits(student);
        expect(studentByEmail).toEqual(expect.arrayContaining(expected));

    });
});

describe("Test para StudentVP: getStudentsEmail",() =>{
    test("Requerimiento 1: Calcular los correos de los estudiantes",() => {
        const student = [{nombre: "Hola", email: "Howell@visualpartnership.xyz"}];
        const expected = ["Howell@visualpartnership.xyz"];

        const studentByEmail = StudentVP.getStudentsEmail(student);
        expect(studentByEmail).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: getStudentsEmail",() =>{
    test("Requerimiento 2: Calcular los correos de los estudiantes con correo vacio",() => {
        const student = [{nombre: "Hola", email: ""},{nombre: "Hola", email: ""}];
        const expected = [];

        const studentByEmail = StudentVP.getStudentsEmail(student);
        expect(studentByEmail).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: getStudentsEmail",() =>{
    test("Requerimiento 2: Calcular los correos de los estudiantes con correo numerico",() => {
        const student = [{nombre: "Hola", email: 2}];
        const expected = [];

        const studentByEmail = StudentVP.getStudentsEmail(student);
        expect(studentByEmail).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: getStudentsEmail",() =>{
    test("Requerimiento 2: Calcular los correos de los estudiantes sin atributo de correo",() => {
        const student = [{nombre: "Hola", email: 2}];
        const expected = [];

        const studentByEmail = StudentVP.getStudentsEmail(student);
        expect(studentByEmail).toEqual(expect.arrayContaining(expected));

    });
});

describe("Test para StudentVP: filterByCertification",() =>{
    test("Requerimiento 1: Calcular todos los estudiantes en una misiocon certificado",() => {
        const student = [{nombre: "Hola", email: "Howell@visualpartnership.xyz", haveCertification: true}];
        const expected = student;

        const studentWithCertification = StudentVP.filterByCertification(student);
        expect(studentWithCertification).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: filterByCertification",() =>{
    test("Requerimiento 2: Calcular todos los estudiantes con certificado, prueba con vacio",() => {
        const student = [{nombre: "Hola", email: "Howell@visualpartnership.xyz", haveCertification: ""}];
        const expected = [];

        const studentWithCertification = StudentVP.filterByCertification(student);
        expect(studentWithCertification).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: filterByCertification",() =>{
    test("Requerimiento 3: Calcular todos los estudiantes con certificado, prueba con un numero",() => {
        const student = [{nombre: "Hola", email: "Howell@visualpartnership.xyz", haveCertification: 2}];
        const expected = [];

        const studentWithCertification = StudentVP.filterByCertification(student);
        expect(studentWithCertification).toEqual(expect.arrayContaining(expected));

    });
});
describe("Test para StudentVP: filterByCertification",() =>{
    test("Requerimiento 4: Calcular todos los estudiantes con certificado, prueba sin atributo",() => {
        const student = [{nombre: "Hola", email: "Howell@visualpartnership.xyz"}];
        const expected = [];

        const studentWithCertification = StudentVP.filterByCertification(student);
        expect(studentWithCertification).toEqual(expect.arrayContaining(expected));

    });
});