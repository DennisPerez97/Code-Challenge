class StudentVP{

    static filterByCredits(students,creditos){
        const studentByCreditos = students.filter((student) => {
            let credits = student.credits;
            //console.log(mision);
            if(credits && !isNaN(credits) && creditos && !isNaN(creditos)){
            //console.log("Existe mision y NO es un numero")
                if(credits >= creditos){
                    return student;
                }
            }

        });
        return studentByCreditos;
    }
    static getStudentsEmail(student){
        const StudentsByEmail = student.map((student) => {
            let getemail = student.email;
            //console.log(mision);
            if(getemail && isNaN(getemail)){
            //console.log("Existe mision y NO es un numero")
                    return getemail;
            }
        });
        return StudentsByEmail;
    }

    static filterByCertification(students){
        console.log(students)
        const StudentsCertification = students.filter((student) => {
            let getStudents = student.haveCertification;
            //console.log(mision);
            console.log(getStudents);
            if(getStudents == true && typeof getStudents.valueOf() === 'boolean'){
            //console.log("Existe mision y NO es un numero")
                    return student;
            }

        });
        return StudentsCertification;
    }
}

module.exports = StudentVP;