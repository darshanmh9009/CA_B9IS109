import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        difficulty: { type: String, required: true },
        time_req: { type: String, required: true },
        rating: { type: Number, required: true }
    }, 
    {
        timestamps: true
    }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;