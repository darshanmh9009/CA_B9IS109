import express from "express";
import Project from "../models/projectModel.js";
import User from "../models/userModel.js";
import data from "../data/data.js";
import Enrolled from "../models/enrolledModel.js";
import TaskList from "../models/taskListModel.js";
// import users from "../data/data.js";

const seedRouter = express.Router();

seedRouter.get('/projects', async (req, res) => {
    await Project.deleteMany({});
    const createProjects = await Project.insertMany(data.projects);
    res.send({ createProjects });
});

seedRouter.get('/users', async (req, res) => {
    await User.deleteMany({});
    const createUsers = await User.insertMany(data.users);
    res.send({ createUsers });
});

seedRouter.get('/enrolled', async (req, res) => {
    await Enrolled.deleteMany({});
    const createEnrolled = await Enrolled.insertMany(data.enrolled);
    res.send({ createEnrolled });
})

seedRouter.get('/task-list', async (req, res) => {
    await TaskList.deleteMany({});
    const createTaskList = await TaskList.insertMany(data.projectTasks);
    res.send(createTaskList);
})

export default seedRouter;