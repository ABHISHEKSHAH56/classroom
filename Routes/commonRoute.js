const express = require('express');
const router = express.Router()
const commonController = require('../Controllers/commonController')
const { authCheck, adminCheck } = require('../helpers/authHelper')
const { verifyAccessToken } = require('../helpers/jwt_helper')


//list 
router.get("/user",commonController.allUser);
router.get("/student",commonController.allStudent);
router.get("/course",commonController.allCourse);
router.get("/faculty",commonController.allfaculty);
router.get("/assigment",commonController.allAssigment)
router.get("/assigment/:courseId",verifyAccessToken,authCheck,commonController.ListOfcourseAssigment)

module.exports = router
