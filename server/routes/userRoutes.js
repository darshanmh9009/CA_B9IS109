// importing from node.js
import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";

// importing from other files
import User from "../models/userModel.js";
import Enrolled from "../models/enrolledModel.js";

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send(User.find());
})

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.passcode, user.passcode)) {
                res.status(200).send(user);
                return;
            }
        }
        res.status(401).send({ message: "Invalid email or password" })
    })
);

userRouter.post(
    '/signup',
    expressAsyncHandler(async (req, res) => {
        const username = req.body.username;
        const email = req.body.email;
        const passcode = req.body.passcode;
        if (await User.findOne({ email: req.body.email })) {
            res.send({ message: "Email Already Exists" });
        }
        else {
            if (User.create({ username, email, passcode: bcrypt.hashSync(passcode) })) {
                if (await Enrolled.create({ email: email, projects_enrolled: [] }))
                    res.send({ message: "success", user: await User.findOne({ email: req.body.email }) });
            }
        }
    })
);

userRouter.post(
    '/delete',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.body.id);
        if (bcrypt.compareSync(req.body.passcode, user.passcode)) {
            if (await User.findByIdAndDelete(req.body.id)) {
                res.send({ message: "success" });
            }
        }
        else {
            res.send({ message: "Incorrect Password" });
        }
    })
);

userRouter.post(
    '/update',
    expressAsyncHandler(async (req, res) => {
        if (await User.findByIdAndUpdate(
            req.body.id,
            {
                id: req.body.id,
                username: req.body.name,
                designation: req.body.designation,
                bio: req.body.bio,
                phone: req.body.phone,
                email: req.body.email,
                birthday: req.body.birthday,
                gender: req.body.gender,
            }
        )) {
            res.send(await User.findById(req.body.id));
        }
        else {
            res.send({ message: "failure" });
        }
    })
);

userRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    res.send(user);
});

userRouter.get('/:userid/enrolled', async (req, res) => {
    const id = req.params.userid;
});

export default userRouter;