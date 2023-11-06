import { useState } from "react";
import "../../style/form.css";
import { useNavigate } from "react-router-dom";

const ProfileEdit = (props) => {
    const navigate = useNavigate();
    
    console.log(props);
    const [details, setDetails] = useState({
        name: "John Doe",
        designation: "Student",
        location: "Ireland",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam ex laborum iusto commodi culpa?",
        phone: "+",
        email: "abc@gmail.com",
        site: "helloworld.com",
        bday: "1 January 2023",
        gender: "Male",
    });

    const [msg, setMsg] = useState("");
    const [color, setColor] = useState("");

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setDetails(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value,
            }
        });
    }

    const [verifyEmail, setVerifyEmail] = useState(false);
    const [verifyPhone, setVerifyPhone] = useState(false);

    function sendEmailForVerification() {
        setVerifyEmail(true);
    }

    function sendSMSForVerification() {
        setVerifyPhone(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (setDetails.email === "" || setDetails.pass === "") {
            setMsg("Fill the required details");
            setColor("red");
        }
        // else if (true) {}
        // need to add check statements for valid email
        else {
            setMsg("Sign In successful");
            setColor("green");

        }
        // pass the states into db
    }

    return (
        <>
            <form method="post" className="form form-width">
                <h1
                    className="form-heading"
                >
                    Edit Profile Details
                </h1>

                {msg && (
                    <div className="msg-box" id={color}>
                        {msg}
                    </div>
                )}

                <div className="input-box">
                    <label htmlFor="name">Name: </label>
                    <input
                        className="input"
                        type="text"
                        name="name"
                        id="name"
                        value={details.name}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="designation">Designation: </label>
                    <select
                        className="input"
                        name="designation"
                        id="designation"
                        onChange={handleChange}
                    >
                        <option value="student">Student</option>
                        <option value="graduate">Graduate</option>
                        <option value="working">Working</option>
                        <option value="hobbiest">Hobbiest</option>
                        <option value="business-man">Business Man</option>
                    </select>
                </div>

                <div className="input-box">
                    <label htmlFor="bio">Bio: </label>
                    <input
                        className="input"
                        type="text"
                        name="bio"
                        id="bio"
                        value={details.bio}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="phone">Phone: </label>
                    <input
                        className="input"
                        type="text"
                        name="phone"
                        id="phone"
                        value={details.phone}
                        onChange={handleChange}
                        autoComplete="off"
                    />

                    {verifyPhone && (
                        <input
                            className="input"
                            type="number"
                            placeholder="verification code sent to SMS"
                            autoComplete="off"
                        />
                    )}

                    <button
                        onClick={sendSMSForVerification}
                        className="edit-btn">
                        Verify
                    </button>
                </div>

                <div className="input-box">
                    <label htmlFor="email">Email: </label>
                    <input
                        className="input"
                        type="email"
                        name="email"
                        id="email"
                        value={details.email}
                        onChange={handleChange}
                        autoComplete="off"
                    />

                    {verifyEmail && (
                        <input
                            className="input"
                            type="text"
                            placeholder="verification code sent to inbox"
                            autoComplete="off"
                        />
                    )}

                    <button
                        onClick={sendEmailForVerification}
                        className="edit-btn">
                        Verify
                    </button>
                </div>

                <div className="input-box">
                    <label htmlFor="site">Site: </label>
                    <input
                        className="input"
                        type="text"
                        name="site"
                        value={details.site}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="bday">Birthday: </label>
                    <input
                        className="input"
                        type="text"
                        name="bday"
                        id="bday"
                        value={details.bday}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="gender">Gender: </label>
                    <select
                        className="input"
                        name="gender"
                        id="gender"
                        onChange={handleChange}
                    >
                        <option value="student">Male</option>
                        <option value="graduate">Female</option>
                        <option value="working">Prefer not to say</option>
                    </select>
                </div>

                <div className="input-box">
                    <button
                        className="form-btn"
                        onClick={handleSubmit}
                    >
                        Edit Details
                    </button>
                    {/* <button className="form-btn">Sign In</button> */}
                </div>

                <div className="below-form-msg">
                    <span><div onClick={() => {navigate("/editEmail")}}>Edit Email</div></span>
                    <span>|</span>
                    <span><div onClick={() => {navigate("/editPhone")}}>Edit Phone Number</div></span>
                </div>
            </form>
        </>
    )
}

export default ProfileEdit
