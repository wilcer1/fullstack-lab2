const express = require("express");
const router = express.Router();
const Student = require("../model/Student");
const Registration = require("../model/Registration");
const Course = require("../model/Course");


async function setID(){
    return Math.floor(Math.random() * 100);
};

router.post("/student", async (req, res) => {
    console.log(req.body.full_name);
    try{
    const student = new Student({
        unit_id: await setID(), 
        full_name: req.body.full_name,
        email: req.body.email
    }); 
    await student.save();
    res.send(student);
    }catch(error){
        res.status(404);
        console.log(error);
        res.send({error: "couldnt create"});
    };
});

router.post("/course", async (req, res) => {
    try{
    const course = new Course({
        course_code: req.body.course_code, 
        course_name: req.body.course_name,
        course_description: req.body.course_description
    }); 
    await course.save();
    res.send(course);
    }catch(error){
        res.status(404);
        console.log(error);
        res.send({error: error});
    };
});

router.post("/registration", async (req, res) => {
    try{
    const registration = new Registration({
        student_id: req.body.student_id, 
        course_code: req.body.course_code
        
    }); 
    await registration.save();
    res.send(registration);
    }catch(error){
        res.status(404);
        console.log(error);
        res.send({error: error});
    };
});

router.get("/students", async (req, res) => {
    const student = await Student.find();
    res.send(student);

});


router.get("/courses", async (req, res) => {
    const courses = await Course.find();
    res.send(courses);

});
router.get("/registrations", async (req, res) => {
    const registrations = await Registration.find();
    res.send(registrations);

});

router.get("/studentinfo", async (req, res) => {
    const student = await Student.find().select("unit_id full_name -_id");
    const registration = await Registration.find().select(`course_code student_id unix_timestamp -_id`);
    
    for(let stud of student){
        for(let reg of registration){
            if(stud.unit_id == reg.student_id){
                stud.course_code = reg.course_code;
                stud.regtime = reg.unix_timestamp;
            }
        }
    }
    const course = await Course.find().select("course_code course_name -_id");
    for (let stud of student){
        for (let crs of course){
            if(stud.course_code == crs.course_code){
                stud.course_name = crs.course_name;
            }
        }
    }



    const studentinfo = [];
    for(let i = student.length - 1; i > (student.length - 6); i--){
        studentinfo.push
       ({
        student_id: student[i].unit_id,
        student_name: student[i].full_name,
        course_name: student[i].course_name,
        registration_time: student[i].regtime
    });
    }
    
    res.send(studentinfo);
    
});

module.exports = router;