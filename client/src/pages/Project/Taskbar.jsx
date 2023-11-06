import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../style/globals.css";
import "../../style/taskbar.css";
import { openArrow, unchecked, inprog, done, cross } from "../../assets/icons";

export default function Taskbar(props) {
    const navigate = useNavigate();

    const [taskbarVisible, setTaskbarVisible] = useState(false);
    const [taskNamesVisible, setTasknamesVisible] = useState(true);

    function toggleTaskBarVisible() {
        setTaskbarVisible(prevState => !prevState);
        setTasknamesVisible(prevState => !prevState);
        document.getElementById("taskbar-btn").style.rotate = taskbarVisible ? "0deg" : "180deg";
    }

    function updateTask(task_id, task_name) {
        props.provideProjectDetails(task_id, task_name);
    }

    const taskList = [{
        taskId: 1,
        taskStatus: done,
        taskName: "Task 1: Introduction",
    }, {
        taskId: 2,
        taskStatus: done,
        taskName: "Task 2: Basics",
    }, {
        taskId: 3,
        taskStatus: inprog,
        taskName: "Task 3: Fundamentals",
    }, {
        taskId: 4,
        taskStatus: inprog,
        taskName: "Task 4: Basic Syntax of Java",
    }, {
        taskId: 5,
        taskStatus: unchecked,
        taskName: "Task 5: Addition and Subtraction",
    }, {
        taskId: 6,
        taskStatus: unchecked,
        taskName: "Task 6: Multiplication and Division",
    }, {
        taskId: 7,
        taskStatus: unchecked,
        taskName: "Task 7: Computing large expressions",
    }, {
        taskId: 8,
        taskStatus: unchecked,
        taskName: "Task 8: GUI in Java",
    }, {
        taskId: 9,
        taskStatus: unchecked,
        taskName: "Task 9: Buttons in Java",
    }, {
        taskId: 10,
        taskStatus: unchecked,
        taskName: "Task 10: Click event handlers",
    }, {
        taskId: 11,
        taskStatus: unchecked,
        taskName: "Task 11: Connection operations to buttons",
    }, {
        taskId: 12,
        taskStatus: unchecked,
        taskName: "Task 12: Clear and Reset Button",
    }, {
        taskId: 13,
        taskStatus: unchecked,
        taskName: "Task 13: Final touches",
    }, {
        taskId: 14,
        taskStatus: unchecked,
        taskName: "Assignment 1:",
    }, {
        taskId: 15,
        taskStatus: unchecked,
        taskName: "Notes",
    }];

    var taskListNew = [];
    taskList.map((task) => {
        taskListNew.push(
            <div
                onClick={() => {updateTask(task.taskId, task.taskName)}}
                className={taskbarVisible ? "task-item flex gap-10" : "task-item task-item-hover flex gap-10"}
                href={`/projects/enrolled/myProjects/${task.taskURL}`}>
                <img
                    className="task-status"
                    src={task.taskStatus}
                    alt="task status icon"
                    width={20}
                    height={20}
                ></img>
                <div className={taskNamesVisible ? "task-name" : "none"}>{task.taskName}</div>
            </div>
        );
        // this Link tag will open up the page under [projectID]. Visit that page for further instructions. 
    });
    
    return (
        <>
            <div
                className="taskbar-btn-2 flex"
                id="taskbar-btn-2"
                onClick={toggleTaskBarVisible}
            >
                <img
                    className="arrow-img"
                    src={openArrow}
                    alt="open close arrow icon"
                    width={10}
                    height={20}
                ></img>
            </div>
            <div
                className={taskbarVisible ? "taskbar collapse" : "taskbar"}>
                <div className="taskbar-scroll">
                    <div
                        className="taskbar-btn flex"
                        id="taskbar-btn"
                        onClick={toggleTaskBarVisible}
                    >
                        <img
                            className="arrow-img"
                            src={openArrow}
                            alt="open close arrow icon"
                            width={10}
                            height={20}
                        ></img>
                    </div>

                    <h1 className={taskNamesVisible ? "small-heading numpy" : "none"}>Calculator App Using Java</h1>

                    <div className="tasks-list">
                        {taskListNew}
                    </div>
                </div>
            </div>
        </>
    );
}