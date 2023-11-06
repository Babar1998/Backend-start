const {models} = require("../models")

  //Db operations
  module.exports = {
    getStudent: async () => {
      const students = await models.student.findAll();
      return students;
    },
    addStudent: async(data) => {
      const students = await models.student.create(data);
      console.log(students);
      return students;
    },

    updatedStudent: async (studentId, updateStudentData) => {
      const students = await models.user.findByPk(studentId);
    if (students) {
        students.update(updateStudentData);
    }
    return students;
    },

    deleteStudent: async (studentId) => {
      const students = await models.student.findByPk(studentId);
    if (students) {
        students.destroy();
        return "STUDENT DELETED SUCCESSFULLY";
    }
    return null;
    },
  };
  
    // //Db operations
    // module.exports = {
    //   getStudent: () => {
    //     return students;
    //   },
    //   addStudent: (data) => {
    //     //add new user to the array
    //     students.push(data);
    //     return students;
    //   },
  
    //   updatedStudent: (studentId, updateStudentData) => {
    //       let studentIndex = students.findIndex((user) => user.id == studentId);
    //       if(studentIndex !== -1){
    //           console.log(studentIndex);
    //           students[studentIndex] = updateStudentData
    //           return students;
    //       }
    //   },
  
    //   deleteStudent: (studentId) => {
    //       let studentIndex = students.findIndex((user) => user.id == studentId);
    //       if (studentIndex !== -1){
    //           students.splice(studentIndex,1);
    //           return students;
    //       }
    //       return null;
    //   },
    // };