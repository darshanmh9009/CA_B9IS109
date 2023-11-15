import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        passcode: { type: String, required: true, unique: true },
        location: { type: String },
        designation: { type: String },
        bio: { type: String },
        phone: { type: String },
        website: { type: String },
        birthday: { type: String },
        gender: { type: String },
        skills: { type: Array },
        ongoing_proj: { type: Array },
        completed_proj: { type: Array },
        isAdmin: { type: Boolean }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);
export default User;