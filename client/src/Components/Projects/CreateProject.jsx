import { useState } from "react";
import "../../style/globals.css";
import "../../style/createProject.css";
import "../../style/form.css";

const CreateProject = () => {
    const [formData, setFormData] = useState({
        name: "",
        desc: "",
        difficulty: "",
        time: "",
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

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.name === "" || formData.desc === "" || formData.difficulty === "" || formData.time === "") {
            setMsg("Fill the required details");
            setColor("red");
        }
        else {
            setMsg("Project Created Successful");
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
                    Create Project
                </h1>

                {msg && (
                    <div className="msg-box" id={color}>
                        {msg}
                    </div>
                )}

                <div className="flex create-form">
                    <div className="create-sub-form">
                        <div className="input-box">
                            <label htmlFor="email">Enter Project Name: </label>
                            <input
                                className="input"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Eg: Calculator App in Java"
                                autoComplete="off"
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="email">Enter Time Required: </label>
                            <input
                                className="input"
                                type="text"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                placeholder="Eg: 2 days 10 hours"
                                autoComplete="off"
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="email">Enter Project Difficulty: </label>
                            <select 
                                className="input"
                                name="difficulty"
                                value={formData.difficulty}
                                onChange={handleChange}
                            >
                                <option value="0">Beginner Friendly</option>
                                <option value="1">Few pre-requisits</option>
                                <option value="2">Professional</option>
                            </select>
                        </div>

                        
                    </div>

                    <div className="create-sub-form">
                        <div className="input-box">
                            <label htmlFor="description">Enter project description: [Limit: 500 words]</label>
                            <textarea 
                                className="input textarea"
                                name="desc"
                                value={formData.desc} 
                                onChange={handleChange}
                                placeholder="Describe about the tasks and the tech stack to be used"
                                autoComplete="off"
                            ></textarea>
                        </div>

                        
                    </div>
                </div>

                <div className="input-box">
                    <button
                        className="form-btn"
                        onClick={handleSubmit}
                    >
                        Create Project
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateProject
