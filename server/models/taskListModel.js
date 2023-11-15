import mongoose from "mongoose";

const taskListSchema = new mongoose.Schema(
    {
        projectName: { type: String, required: true },
        taskList: { type: Array, required: true },
    }
);

const TaskList = mongoose.model('TaskList', taskListSchema);
export default TaskList;