// importing libraries
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// importing routers
import seedRouter from "./routes/seedRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import userRouter from "./routes/userRoutes.js";
import enrolledRoutes from "./routes/enrolledRoutes.js";

// configuring .env file
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/seed', seedRouter);
app.use('/api/projects', projectRouter);
app.use('/api/users', userRouter);
app.use('/api/enrolled', enrolledRoutes);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

// app.get('api/projects/enrolled/:user_id', (req, res) => {
//     try {
//         const userId = req.params.user_id;
//         let enrolledProjects = [];
//         // piece of code
//         res.status(200).send(enrolledProjects);
//     } catch (err) {
//         res.status(404).send({ message: "Enrolled Products Not Found" });
//     }
// })

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Backend Running on Port ${port}`);
});