import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/globals.css";
import "../../style/taskbar.css";

const Taskbar = (props) => {
    const navigate = useNavigate();

    const status = ["unchecked", "inprog", "done", "cross"];
    const [taskbarVisible, setTaskbarVisible] = useState(false);
    const [taskNamesVisible, setTasknamesVisible] = useState(true);

    function toggleTaskBarVisible() {
        setTaskbarVisible(prevState => !prevState);
        setTasknamesVisible(prevState => !prevState);
        document.getElementById("taskbar-btn").style.rotate = taskbarVisible ? "0deg" : "180deg";
    }

    const taskList = [{
        taskStatus: status[2],
        taskName: "Task 1: Introduction",
        taskURL: "/task1"
    }, {
        taskStatus: status[2],
        taskName: "Task 2: Basics",
        taskURL: "/task2"
    }, {
        taskStatus: status[1],
        taskName: "Task 3: Fundamentals",
        taskURL: "/task3"
    }, {
        taskStatus: status[0],
        taskName: "Task 4: Basic Syntax of Java",
        taskURL: "/task4"
    }, {
        taskStatus: status[0],
        taskName: "Task 5: Addition and Subtraction",
        taskURL: "/task5"
    }, {
        taskStatus: status[0],
        taskName: "Task 6: Multiplication and Division",
        taskURL: "/task6"
    }, {
        taskStatus: status[0],
        taskName: "Task 7: Computing large expressions",
        taskURL: "/task7"
    }, {
        taskStatus: status[0],
        taskName: "Task 8: GUI in Java",
        taskURL: "/task8"
    }, {
        taskStatus: status[0],
        taskName: "Task 9: Buttons in Java",
        taskURL: "/task9"
    }, {
        taskStatus: status[0],
        taskName: "Task 10: Click event handlers",
        taskURL: "/task10"
    }, {
        taskStatus: status[0],
        taskName: "Task 11: Connection operations to buttons",
        taskURL: "/task11"
    }, {
        taskStatus: status[0],
        taskName: "Task 12: Clear and Reset Button",
        taskURL: "/task12"
    }, {
        taskStatus: status[0],
        taskName: "Task 13: Final touches",
        taskURL: "/task13"
    }, {
        taskStatus: status[0],
        taskName: "Assignment 1:",
        taskURL: "/assignment1"
    }, {
        taskStatus: status[0],
        taskName: "Notes",
        taskURL: "/notes1"
    }];

    var taskListNew = [];
    taskList.map((task) => {
        taskListNew.push(
            <div
                onClick={() => {navigate(`/[rpjects/enrolled/myProjects/${task.taskURL}`)}}
                className={taskbarVisible ? "task-item flex gap-10" : "task-item task-item-hover flex gap-10"}
            >
                <img
                    className="task-status contact-icon"
                    src={`/assets/icons/${task.taskStatus}.png`}
                    alt="task status icon"
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
                    src="/assets/icons/open-arrow.png"
                    alt="open close arrow icon"
                    // width={10}
                    // height={20}
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
                            src="/assets/icons/open-arrow.png"
                            alt="open close arrow icon"
                        ></img>
                    </div>

                    <h1 className={taskNamesVisible ? "small-heading numpy" : "none"}>Calculator App Using Java</h1>

                    <div className="tasks-list">
                        {taskListNew}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Taskbar
