const express = require("express");
const router = express.Router();
const Student = require("../model/Student");
const Registration = require("../model/Registration");
const Course = require("../model/Course");


async function setID(){
    return Math.floor(Math.random() * 100);
} 

router.post("/student", async (req, res) => {
    try{
    const student = new Student({
        unit_id: await setID(),
        full_name: req.body.name,
        email: req.body.email
    }); 
    await student.save();
    res.send(student);
}catch{
    res.status(404);
    res.send({error: "Could not create student"})
}
});