"use client";

import "../../style/profile.css";
import "../../style/project.css";
import { useState } from "react";
import { difficult, time } from "../../assets/icons";

const ProjectPage = () => {
    const diffColor = ["green-id", "yellow-id", "red-id"];
    const difficulty = ["Beginner Friendly", "Few pre-requisits", "Professional"];

    const [details, setDetails] = useState({
        difficulty: 0,
        timereq: "20 hours",
        rating: 3,
    });

    return (
        <div>
            <div className="project-page">
                <div className="project-page-header">
                    <h1 className="medium-heading numpy">
                        Project Name
                    </h1>
                    <div className="flex project-desc">
                        <div className="description">
                            <div className="small-heading numpy">Description: </div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est numquam, in, voluptas natus dolore, nam facere alias autem error dolor architecto. Magnam impedit, rerum, odio vel illo neque aspernatur molestias excepturi laborum maiores ullam! Commodi dignissimos adipisci veritatis. Suscipit, earum deleniti molestias excepturi fugit sed illum officiis sapiente laboriosam! Nostrum!
                        </div>

                        <div className="ratings">
                            {/* Contact Items */}
                            <li className="contact-item" id={diffColor[details.difficulty]}>
                                <img
                                    className="contact-icon"
                                    src={difficult}
                                    alt="bday icon"
                                ></img>

                                <span>Difficulty: {difficulty[details.difficulty]}</span>
                            </li>

                            <li className="contact-item" id="orange-bg-color">
                                <img
                                    className="contact-icon"
                                    src={time}
                                    alt="gender icon"
                                ></img>

                                <span>Time: {details.timereq}</span>
                            </li>

                            <li className="contact-item" id="blue-bg-color">
                                <img
                                    className="contact-icon"
                                    src={time}
                                    alt="gender icon"
                                ></img>

                                <span>Industry Rating: {details.rating}</span>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
