
const students = [
    { id: 1, name: "Harry", semester: "8", cgpa: "3.96" },
    { id: 2, name: "Babar", semester: "4", cgpa: "3.50"  },
    { id: 3, name: "Rizzy", semester: "6", cgpa: "3.00"  },
  ];
  //Db operations
  module.exports = {
    getStudent: () => {
      return students;
    },
    addStudent: (data) => {
      //add new user to the array
      students.push(data);
      return students;
    },

    updatedStudent: (studentId, updateStudentData) => {
        let studentIndex = students.findIndex((user) => user.id == studentId);
        if(studentIndex !== -1){
            console.log(studentIndex);
            students[studentIndex] = updateStudentData
            return students;
        }
    },

    deleteStudent: (studentId) => {
        let studentIndex = students.findIndex((user) => user.id == studentId);
        if (studentIndex !== -1){
            students.splice(studentIndex,1);
            return students;
        }
        return null;
    },
  };
  