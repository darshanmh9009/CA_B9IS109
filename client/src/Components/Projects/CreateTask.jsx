import { useState } from "react";
import "../../style/globals.css";
import "../../style/createProject.css";
import "../../style/form.css";
import AddHeading from "./AddHeading";
import AddImg from "./AddImg";
import AddText from "./AddText";

import { plus } from "../../assets/icons";

const CreateTask = () => {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        time: "",
        iframe: "",
    });

    const [msg, setMsg] = useState("");
    const [color, setColor] = useState("");

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }
        });
    }

    const [addElementsList, setAddElementsList] = useState([]);

    function addElement(element) {
        if (element == "heading") {
            setAddElementsList(prevState => [...prevState, <AddHeading />]);
        }
        if (element == "img") {
            setAddElementsList(prevState => [...prevState, <AddImg />]);
        }
        if (element == "text") {
            setAddElementsList(prevState => [...prevState, <AddText />]);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (false) {
            setMsg("Fill the required details");
            setColor("red");
        }
        else {
            setMsg("Task Created Successful");
            setColor("green");
        }
        // pass the states into db
    }

    return (
        <div>
            <form method="post" className="form create-form-width">
                <h1
                    className="form-heading medium-heading numpy"
                >
                    Create Task
                </h1>

                {msg && (
                    <div className="msg-box" id={color}>
                        {msg}
                    </div>
                )}

                <div className="flex create-form">
                    <div className="create-sub-form">
                        <div className="input-box">
                            <label htmlFor="title">Enter Title of the task: </label>
                            <input
                                className="input"
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Eg: Task 1"
                                autoComplete="off"
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="sub-title">Enter Sub-title Of The Task: </label>
                            <input
                                className="input"
                                type="text"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                placeholder="Eg: 15 min read"
                                autoComplete="off"
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="time">Enter Time Required: </label>
                            <input
                                className="input"
                                type="text"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                placeholder="Eg: 15 min read"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className="create-sub-form">
                        <div className="input-box">
                            <label htmlFor="description">If you wish to include a Youtube video: [paste iframe]</label>
                            <textarea
                                className="input textarea"
                                name="iframe"
                                value={formData.iframe}
                                onChange={handleChange}
                                placeholder='<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6HE6d0lKh4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                                autoComplete="off"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="add-task-el flex gap-15">
                    <button
                        type="button"
                        className="form-btn flex btn-flex"
                        onClick={() => { addElement("heading") }}
                    >
                        <img
                            className="plus-icon"
                            src={plus}
                            alt="plus icon"
                        ></img>

                        <p>
                            Add Heading
                        </p>
                    </button>

                    <button
                        type="button"
                        className="form-btn flex btn-flex"
                        onClick={() => { addElement("img") }}
                    >
                        <img
                            className="plus-icon"
                            src={plus}
                            alt="plus icon"
                        ></img>

                        <p>
                            Add Image
                        </p>
                    </button>

                    <button
                        type="button"
                        className="form-btn flex btn-flex"
                        onClick={() => { addElement("text") }}
                    >
                        <img
                            className="plus-icon"
                            src={plus}
                            alt="plus icon"
                        ></img>

                        <p>
                            Add Text
                        </p>
                    </button>
                </div>

                {addElementsList}

                <div className="input-box">
                    <button
                        className="form-btn"
                        onClick={handleSubmit}
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
