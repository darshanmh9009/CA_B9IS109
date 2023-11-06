import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/globals.css";
import "../../style/form.css";
import Navbar from "../../Components/Navbar";

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        f_name: "",
        l_name: "",
        email: "",
        pass: "",
        c_pass: "",
    });

    const [msg, setMsg] = useState("");
    const [icon, setIcon] = useState("");
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
        if (formData.f_name === "" ||
            formData.l_name === "" ||
            formData.email === "" ||
            formData.pass === "" ||
            formData.c_pass === "" ||
            formData.pass != formData.c_pass) {
            setMsg("Fill the required details");
            // setIcon(<CancelRoundedIcon />);
            setColor("red");
        }
        // else if (true) {}
        // need to add check statements for valid email
        else {
            setMsg("Sign In successful");
            // setIcon(<CheckCircleRoundedIcon />);
            setColor("green");
        }
        // pass the states into db
    }

    return (
        <>
            <Navbar />
            
            <div className="form-page">
                <div className="login-with">
                    <div className="google"></div>
                    <div className="facebook"></div>
                    <div className="github"></div>
                </div>
                <form method="post" className="form form-width">
                    <h1
                        className="form-heading"
                    >
                        Sign Up
                    </h1>
                    <p className="form-subheading">
                        Let's get you started
                    </p>

                    {msg && (
                        <div className="msg-box" id={color}>
                            {/* {icon}&nbsp;{msg} */}
                            {msg}
                        </div>
                    )}

                    <div className="input-box">
                        <label htmlFor="email">Enter your First Name: </label>
                        <input
                            className="input"
                            type="text"
                            name="f_name"
                            value={formData.f_name}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="email">Enter your Last Name: </label>
                        <input
                            className="input"
                            type="text"
                            name="l_name"
                            value={formData.l_name}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="email">Enter your Email Address: </label>
                        <input
                            className="input"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="email">Enter your Passowrd: </label>
                        <input
                            className="input"
                            type="password"
                            name="pass"
                            value={formData.pass}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="email">Re-type Passowrd: </label>
                        <input
                            className="input"
                            type="password"
                            name="c_pass"
                            value={formData.c_pass}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div className="input-box">
                        <button
                            className="form-btn"
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                        {/* <button className="form-btn">Sign In</button> */}
                    </div>

                    <div className="below-form-msg">
                        <span>Already have an account? </span><div onClick={() => { navigate("/signin") }}>Sign In</div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp
