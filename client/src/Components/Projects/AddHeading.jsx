import { useState } from "react";
import "../../style/globals.css";
import "../../style/form.css";
import "../../style/createProject.css";
import "../../style/addelements.css";

const AddHeading = () => {
    const [formData, setFormData] = useState({
        headType: "",
        headText: "",
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
            <h1 className="small-heading numpy">
                Add Heading:
            </h1>

            <div className="choice">
                <div className="flex choice">
                    <div className="flex gap-15 choice-item">
                        <input
                            className="radio-btn"
                            type="radio"
                            value="big"
                            name="headType"
                            id="heading-big"
                            onChange={handleChange}
                        />
                        <label for="heading-big" className="radio-label">Big Heading (48px)</label>
                    </div>

                    <div className="flex gap-15 choice-item">
                        <input
                            className="radio-btn"
                            type="radio"
                            value="small"
                            name="headType"
                            id="heading-small"
                            onChange={handleChange}
                        />
                        <label for="heading-small" className="radio-label">Small Heading (34px)</label>
                    </div>
                </div>

                <div className="input-box">
                    <label htmlFor="time">Enter Heading Content: </label>
                    <input
                        className="input"
                        type="text"
                        name="headText"
                        value={formData.headText}
                        onChange={handleChange}
                        placeholder="Eg: This is Heading One"
                        autoComplete="off"
                    />
                </div>

                <div className="preview-title">Preview: </div>
                <div className="medium-heading numpy preview">{formData.headText}</div>
            </div>
        </div>
    )
}

export default AddHeading
