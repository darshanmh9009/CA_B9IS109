import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { unchecked, inprog, done, cross } from "../../assets/icons";

const Project = (props) => {
    const navigate = useNavigate();

    const diffColor = ["green-id", "yellow-id", "red-id"];
    const difficulty = ["Beginner Friendly", "Few pre-requisits", "Professional"];
    const statusTxt = ["Unchecked", "In-progress", "Completed", "Left incomplete"]

    function displayProperty() {
        document.getElementById(props.id).classList.add("active");
    }

    function dropProperty() {
        document.getElementById(props.id).classList.remove("active");
    }

    return (
        <div className="project">
            <div className="project-top flex">
                <div className="status-text" id={props.id}>
                    {statusTxt[props.statusName]}
                </div>

                <div
                    onMouseOver={displayProperty}
                    onMouseOut={dropProperty}>
                    <img
                        className="project-icon"
                        src={props.status}
                        alt="status icon"
                        // width={40}
                        // height={40}
                    ></img>
                </div>

                <h2 className="project-title">
                    Project Name
                </h2>
            </div>

            <div className="project-body">
                <div className="project-details project-desc">
                    <p className="small-text">
                        Description:
                    </p>
                    <p className="para-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, fugiat porro autem repudiandae quos omnis magnam, architecto vitae nihil ea nobis dolore, ex doloribus pariatur.
                    </p>
                </div>

                <div className="flex project-details">
                    <div>
                        <p className="small-text">
                            Difficulty:
                        </p>
                        <p
                            className="difficulty"
                            id={diffColor[props.difficulty]}>
                            {difficulty[props.difficulty]}
                        </p>
                    </div>

                    <div>
                        <p className="small-text">
                            Time Required:
                        </p>
                        <p
                            className="difficulty">
                            {props.timereq}
                        </p>
                    </div>
                </div>

                <div className="project-details">
                    <p className="small-text">
                        Industry Rating:
                    </p>
                    <p className="para-text">
                        {props.rating} stars
                    </p>
                </div>
            </div>

            <div className="project-bottom">
                {props.enrolled ? (
                    <div
                        onClick={() => {navigate(`/projects-enrolled/${props.id}`)}}
                        className="learn-more">
                        Go to project
                    </div>
                ) : (

                    <div
                        onClick={() => {navigate("/project-info")}}
                        className="learn-more">
                        Learn more
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project
