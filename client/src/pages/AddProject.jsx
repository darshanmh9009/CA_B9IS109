import React from "react";
import { useState } from "react";
import "../style/globals.css";
import "../style/createProject.css";
import "../style/form.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CreateProject from "../Components/Projects/CreateProject";
import CreateTask from "../Components/Projects/CreateTask";

import { plus } from "../assets/icons";

export default function AddProject() {
    const [tasks, addTasks] = useState([<CreateTask/>]);

    return (
        <>
            <Navbar />

            <CreateProject />
            
            {tasks}

            <button
                className="form-btn flex btn-flex add-task-btn"
                onClick={() => { addTasks(prevTask => [...prevTask, <CreateTask />]) }}
            >
                <img
                    src={plus}
                    alt="plus-icon"
                    width={20}
                    height={20}
                ></img>

                <p>
                    Add Task
                </p>
            </button>

            <Footer />
        </>
    );
}