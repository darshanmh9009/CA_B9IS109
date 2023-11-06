import { useState } from "react";
import "../../style/globals.css";
import "../../style/form.css";
import "../../style/createProject.css";
import "../../style/addelements.css";

const AddText = () => {
    const [formData, setFormData] = useState({
        textContent: "", // content inside text
        textBg: "no",      // if true, apply textBgColor
        textBgColor: "", // type of the text - regular or highlighted
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }
        });
    }
    return (
        <div className="add-el">
            {/* <form action="post" className="form"></form> */}
            <h1 className="small-heading numpy">
                Add Text:
            </h1>

            {/* toggle to apply bg to the text or not */}
            <div className="choice">
                <div className="flex choice">
                    <div className="flex gap-15 choice-item">
                        <input
                            className="radio-btn"
                            type="radio"
                            value="transparent-text-bg"
                            name="textBg"
                            id="textBgNo"
                            onChange={handleChange}
                        />
                        <label for="textBgNo" className="radio-label">Regular Text (18px)</label>
                    </div>

                    <div className="flex gap-15 choice-item">
                        <input
                            className="radio-btn"
                            type="radio"
                            value="yes"
                            name="textBg"
                            id="textBgYes"
                            onChange={handleChange}
                        />
                        <label for="textBgYes" className="radio-label">Highlighted Text (18px highlighted)</label>
                    </div>
                </div>

                {formData.textBg == "yes" && (
                    <div className="flex choice">
                        <div className="flex gap-15 choice-item">
                            <input
                                className="radio-btn"
                                type="radio"
                                value="white-text-bg"
                                name="textBgColor"
                                id="grey"
                                onChange={handleChange}
                            />
                            <label for="grey" className="radio-label">Grey</label>
                        </div>

                        <div className="flex gap-15 choice-item">
                            <input
                                className="radio-btn"
                                type="radio"
                                value="blue-text-bg"
                                name="textBgColor"
                                id="blue"
                                onChange={handleChange}
                            />
                            <label for="blue" className="radio-label">Blue</label>
                        </div>
                        <div className="flex gap-15 choice-item">
                            <input
                                className="radio-btn"
                                type="radio"
                                value="yellow-text-bg"
                                name="textBgColor"
                                id="yellow"
                                onChange={handleChange}
                            />
                            <label for="yellow" className="radio-label">Yellow</label>
                        </div>

                        <div className="flex gap-15 choice-item">
                            <input
                                className="radio-btn"
                                type="radio"
                                value="orange-text-bg"
                                name="textBgColor"
                                id="orange"
                                onChange={handleChange}
                            />
                            <label for="orange" className="radio-label">Orange</label>
                        </div>
                    </div>
                )}

                <div className="input-box">
                    <label htmlFor="time">Enter Text Content: </label>
                    <input
                        className="input"
                        type="text"
                        name="textContent"
                        value={formData.textContent}
                        onChange={handleChange}
                        placeholder="Eg: This is Heading One"
                        autoComplete="off"
                    />
                </div>

                <div className="preview-title">Preview: </div>
                <div className="regular-text preview"><span className="preview-text" id={formData.textBg == "yes" && formData.textBgColor}>{formData.textContent}</span></div>
            </div>
        </div>
    )
}

export default AddText
