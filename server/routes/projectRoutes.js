import express from "express";
import Project from "../models/projectModel.js";

const projectRouter = express.Router();

projectRouter.get('/', async (req, res) => {
    res.status(200).send(await Project.find());
});

projectRouter.get('/:id', async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (project) {
        res.send(project)
    } else {
        res.status(404).send({ message: "Project Does Not Exist" })
    }
});

export default projectRouter;