import React from "react";
import { useState } from "react";
import Taskbar from "../Project/Taskbar";
import "../../style/globals.css";
import Task from "./Task";

export default function ProjectDetails() {
    const [projectDetails, setProjectDetails] = useState({
        taskId: 1, 
        taskName: "TASK 1: INTRODUCTION", 
    });

    function provideProjectDetails(task_id, task_name) {
        setProjectDetails({
            taskId: task_id, 
            taskName: task_name
        })
    }

    return (
        <>
            <div className="app flex project-portal">
                <Taskbar 
                    projectDetails={projectDetails}
                    provideProjectDetails={provideProjectDetails}
                    setProjectDetails={setProjectDetails}
                />

                <Task
                    projectDetails={projectDetails}
                />
            </div>
        </>
    );
}