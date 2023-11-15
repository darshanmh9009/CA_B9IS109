import express from "express";
import Project from "../models/projectModel.js";
import Enrolled from "../models/enrolledModel.js";
import TaskList from "../models/taskListModel.js";
import expressAsyncHandler from "express-async-handler";

const enrolledRoutes = express.Router();

enrolledRoutes.get('/:status/:email', async (req, res) => {
    try {
        const enrolled = await Enrolled.find({ email: req.params.email });
        const array = [];
        const projectsArray = [];
        if (enrolled) {
            enrolled[0].projects_enrolled.map((proj) => {
                if ((Object.values(proj)[0]) === req.params.status) {
                    const name = Object.keys(proj)[0];
                    array.push(name);
                }
            });
        }
        for (let item of array) {
            const project = await Project.find({ name: item });
            projectsArray.push(project[0]);
        }
        res.send(projectsArray);
    } catch (error) {
        res.send(error.message);
    }
});

enrolledRoutes.get('/:id', async (req, res) => {
    try {
        const project = await Project.find({ _id: req.params.id });
        const name = project[0].name;
        const taskList = await TaskList.find({ projectName: name });
        res.send(taskList);
    } catch (error) {
        console.log(error.message);
    }
});

enrolledRoutes.post('/enroll', expressAsyncHandler(async (req, res) => {
    const email = req.body.email;
    const course_id = req.body.course_id;
    const project = await Project.findById(course_id);
    const enrolled = await Enrolled.find({ email: email });
    console.log(enrolled);

    const newCourseList = [];
    enrolled[0].projects_enrolled.map(x => newCourseList.push(x));
    newCourseList.push({ [project.name]: "ongoing" });

    if (await Enrolled.findOneAndUpdate(
        { email: email }, { projects_enrolled: newCourseList }
    )) {
        res.send({ message: "success" });
    } else {
        res.send({ message: "failure" });
    }
}));

enrolledRoutes.post('/complete', expressAsyncHandler(async (req, res) => {
    const email = req.body.email;
    const course_id = req.body.course_id;
    const project = await Project.findById(course_id);
    const enrolled = await Enrolled.find({ email: email });
    console.log(enrolled);

    const newCourseList = [];
    enrolled[0].projects_enrolled.map((x) => {
        if (Object.keys(x)[0] === project.name) {
            newCourseList.push({ [Object.keys(x)[0]]: "completed" });
        }
        else {
            newCourseList.push(x);
        }
    });

    if (await Enrolled.findOneAndUpdate(
        { email: email }, { projects_enrolled: newCourseList }
    )) {
        res.send({ message: "success" });
    } else {
        res.send({ message: "failure" });
    }
}));

export default enrolledRoutes;