import mongoose from "mongoose";

const enrolledSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        projects_enrolled: { type: Array, requied: true },
    }
);

const Enrolled = mongoose.model('Enrolled', enrolledSchema);
export default Enrolled;