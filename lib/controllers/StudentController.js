const StudentVP = require("./../services/StudentVP");
const Reader = require("../utils/reader");

class ExplorerController{

    static getStudent(){
        const students = Reader.readJsonFile("visualpartners.json");
        return students;
    }
    static getStudentsByCertification(){
        const students = this.getStudent();
        const getStudentsByCertification = StudentVP.filterByCertification(students);
        return getStudentsByCertification;
    }
    static getEmailStudentsByCertification(){
        const students = this.getStudentsByCertification();
        const EmailStudentByCertification = StudentVP.getStudentsEmail(students);
        return EmailStudentByCertification;
    }
    static getStudentByCredits(){
        const students = this.getStudent();
        const StudentByCredints = StudentVP.filterByCredits(students,500);
        return StudentByCredints;
    }
}
module.exports = ExplorerController;