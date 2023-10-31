var express = require("express");
var router = express.Router();
var studentService = require("../service/studentService");

// Callback Functions

/* GET users listing. */
function studentsController(req, res, next) {
  res.send(studentService.getStudent());
}

function addStudentController(req, res, next) {
  const data = req.body;
  res.send(studentService.addStudent(data));
}

function updatedStudentController(req, res, next) {
  const studentId = req.params.id;
  const updateStudentData = req.body;
  const updated = studentService.updatedStudent(studentId, updateStudentData);
  res.send(updated);
}

function deleteStudentController(req, res, next) {
  const studentId = req.params.id;
  const deleted = studentService.deleteStudent(studentId);
  res.send(deleted);
}

module.exports = { studentsController, addStudentController, updatedStudentController, deleteStudentController };
