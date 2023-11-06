import { useState } from "react";
import "../../style/addelements.css";
import "../../style/form.css";
import "../../style/createProject.css";
import "../../style/addelements.css";
import { largeImg, smallImg } from "../../assets/images";

const AddImg = () => {
    const [formData, setFormData] = useState({
        imgSize: "",
        imgText: "",
        imgURL: "",
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
                Add Image:
            </h1>

            <div className="choice">
                <div className="flex choice">
                    <div className="flex gap-15 choice-item">
                        <input
                            className="radio-btn"
                            type="radio"
                            value="big"
                            name="imgSize"
                            id="imgBig"
                            onChange={handleChange}
                        />
                        <label for="imgBig" className="radio-label">Large Image (100% of width)</label>
                    </div>

                    <div className="flex gap-15 choice-item">
                        <input
                            className="radio-btn"
                            type="radio"
                            value="small"
                            name="imgSize"
                            id="imgSmall"
                            onChange={handleChange}
                        />
                        <label for="imgSmall" className="radio-label">Small Image (60% of width)</label>
                    </div>
                </div>

                <div className="input-box">
                    <label htmlFor="time">Enter Text Under Image: (Optional)</label>
                    <input
                        className="input"
                        type="text"
                        name="imgText"
                        value={formData.imgText}
                        onChange={handleChange}
                        placeholder="Eg: This Is Under Image Text"
                        autoComplete="off"
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="time">Upload Picture: (png / jpg)</label>
                    <input
                        className="input"
                        type="file"
                        name="imgURL"
                        value={formData.imgURL}
                        onChange={handleChange}
                        placeholder="Eg: This Is Under Image Text"
                        autoComplete="off"
                    />
                </div>

                <div className="preview-title">Preview: </div>
                <div className="preview flex sp-arnd">
                    <div>
                        <img
                            className="preview-img"
                            src={largeImg}
                            alt="big image"
                        ></img>
                        <p className="txt-ctr">Large Image</p>
                    </div>

                    <div>
                        <img
                            className="preview-img"
                            src={smallImg}
                            alt="big image"
                        ></img>
                        <p className="txt-ctr">Small Image</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddImg
