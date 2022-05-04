class StudentVP{


    static getStudentsEmail(student,email){
        const StudentsByEmail = student.map((student) => {
            let getemail = student.email;
            //console.log(mision);
            if(email && isNaN(email) && getemail && isNaN(getemail)){
            //console.log("Existe mision y NO es un numero")
                if(getemail && getemail.toLowerCase() == email.toLowerCase()){
                    return getemail;
                }
            }
        });
        return StudentsByEmail;
    }

    static getStudentsWithCertification(students){
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