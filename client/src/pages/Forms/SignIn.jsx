import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/form.css";
import { facebook, github, google } from "../../assets/icons";
import Navbar from "../../Components/Navbar";

const SignIn = (props) => {
    const navigate = useNavigate();

    console.log(props);
    const [formData, setFormData] = useState({
        email: "",
        pass: "",
    });

    const [msg, setMsg] = useState("");
    const [icon, setIcon] = useState("");
    const [color, setColor] = useState("");

    function loginWithGoogle() {
        console.log("Login With Google");
    }

    function loginWithFacebook() {
        console.log("Login With Facebook");
    }

    function loginWithGithub() {
        console.log("Login With Github");
    }

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
        if (formData.email === "" || formData.pass === "") {
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
            <Navbar />
            
            <div className="form-page">
                <form method="post" className="form form-width">
                    <h1
                        className="form-heading"
                    >
                        Welcome back
                    </h1>
                    <p className="form-subheading">
                        Please enter your details to sign in
                    </p>

                    <div className="login-with">
                        <div 
                            className="google w"
                            onClick={loginWithGoogle}
                        >
                            <img
                                className="login-icons"
                                src={google}
                                alt="google icon"
                            ></img>
                        </div>

                        <div 
                            className="facebook"
                            onClick={loginWithFacebook}
                        >
                            <img
                                className="login-icons"
                                src={facebook}
                                alt="google icon"
                            ></img>
                        </div>
                        <div 
                            className="github"
                            onClick={loginWithGithub}
                        >
                            <img
                                className="login-icons"
                                src={github}
                                alt="google icon"
                            ></img>
                        </div>
                    </div>

                    <div className="or-div">
                        <p className="or-line"></p>
                        <p className="or-text">OR</p>
                        <p className="or-line"></p>
                    </div>

                    {msg && (
                        <div className="msg-box" id={color}>
                            {/* {icon}&nbsp;{msg} */}
                            {msg}
                        </div>
                    )}

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
                        <button
                            className="form-btn"
                            onClick={handleSubmit}
                        >
                            Sign In
                        </button>
                        {/* <button className="form-btn">Sign In</button> */}
                    </div>

                    <div className="below-form-msg">
                        <span>Don't have an account? </span><div onClick={() => { navigate("/signup") }}>Sign Up</div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn
