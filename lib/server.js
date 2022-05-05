const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
///Feture FizzBuzz

app.get("/", (request, response) => {
    response.json({message: "Students in Visual Partners Api welcome!"});
});

app.listen(port, () => {
    console.log(`Students in Visual Partners API in localhost:${port}`);
});

//localhost:3000/v1/students
app.get("/v1/students", (request, response) => {
    const students = StudentController.getStudent();
    response.json(students);
});
app.get("/v1/students/certification", (request, response) => {
    const students = StudentController.getStudentsByCertification();
    response.json(students);
});
app.get("/v1/students/certification/email", (request, response) => {
    const students = StudentController.getEmailStudentsByCertification();
    response.json(students);
});
app.get("/v1/students/credits", (request, response) => {
    const students = StudentController.getStudentByCredits();
    response.json(students);
});