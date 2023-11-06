import { useState } from "react";
import "../style/form.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // send a mail
    }

    return (
        <div>
            <h1 className="medium-heading numpy">
                Contact Us
            </h1>

            <div className="input-box">
                <label htmlFor="email">Enter your Name: </label>
                <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                />
            </div>

            <div className="input-box">
                <label htmlFor="email">Enter your Email: </label>
                <input
                    className="input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                />
            </div>

            <div className="input-box">
                <label htmlFor="email">Leave a message: </label>
                <textarea
                    className="input textarea contact-textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>

            <div className="input-box">
                <button
                    className="form-btn"
                    onClick={handleSubmit}
                >
                    Send Message
                </button>
            </div>
        </div>
    )
}

export default ContactUs
