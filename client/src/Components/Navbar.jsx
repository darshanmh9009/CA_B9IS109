import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../style/navbar.css";
import { calc } from "../assets/icons";
import { user } from "../assets/images";

const Navbar = (props) => {
    const navigate = useNavigate();

    const [toggleDropDown, setToggleDropDown] = useState(false);
    const menuRef = useRef();
    const imgRef = useRef();
    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (e.target !== menuRef.current && e.target !== imgRef.current) {
                setToggleDropDown(false);
            }
        })
    })
    
    // const [isUserLoggedIn, setUserLoggedIn] = useState(props.login);
    const [isUserLoggedIn, setUserLoggedIn] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);

    const [toggleNav, setToggleNav] = useState(false);

    const [providers, setProviders] = useState(null);

    if (isUserLoggedIn) {
        // redirect("/");
    }
    // useEffect(() => {
    //     const setProviders = async () => {
    //         const response = await getProviders();
    //         setProviders(response);
    //     }
    //     setProviders();
    // }, []);

    function resetClicks() {
        setToggleDropDown(false);
    }

    return (
        <>
            <section className="nav">
                <nav>
                    <div className="nav-lines" onClick={() => { setToggleNav(prevState => !prevState) }}>
                        <div className='Bar'></div>
                        <div className='Bar'></div>
                        <div className='Bar'></div>
                    </div>

                    <div className="nav-items">
                        <div
                            className="nav-logo"
                            onClick={() => {navigate("/")}}>
                            <img
                                className="nav-logo-img"
                                src={calc}
                                alt="nav logo"
                            ></img>
                            <p className="logo-text">Project Portal</p>
                        </div>

                        <div className={toggleNav ? "nav-links active" : "nav-links"}>
                            <div 
                                className="cross" 
                                onClick={() => { setToggleNav(prevState => !prevState) }}
                                onMouseLeave={resetClicks}>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>

                            <div className="dropdown">
                                <li>
                                    <div onClick={() => {navigate("/blogs")}}>Blogs</div>
                                </li>
                                <div className="dropdown-content">
                                    {/* Any drop down content? */}
                                </div>
                            </div>

                            <div className="dropdown">
                                <li>
                                    <div href="#">Projects</div>
                                </li>
                                <div className="dropdown-content">
                                    <div onClick={() => {navigate("/projects")}}>View All Projects</div>
                                    {isUserLoggedIn && (<div onClick={() => {navigate("/projects-enrolled")}}>View Enrolled Projects</div>)}
                                    {isAdmin && (<div onClick={() => {navigate("/projects/add-new")}}>Add New Project</div>)}
                                </div>
                            </div>

                            <div className="dropdown">
                                <li>
                                    <div onClick={() => {navigate("/pricing")}}>Pricing</div>
                                </li>
                                <div className="dropdown-content">
                                    {/* Any drop down content? */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        className="nav-buttons">
                        {
                            isUserLoggedIn ? (
                                <>
                                    <div href="">
                                        <img
                                            className="profile-img"
                                            src={user}
                                            alt="profile"
                                            ref={imgRef}
                                            onClick={() => { setToggleDropDown(prevState => !prevState) }}
                                        ></img>
                                    </div>

                                    {toggleDropDown && (
                                        <div className="toggleDropDown" ref={menuRef}>
                                            <div
                                                onClick={() => {navigate("/profile")}}
                                            >
                                                View Profile
                                            </div>

                                            {isAdmin && (
                                                <div
                                                    onClick={() => {navigate("/admin")}}
                                                >
                                                    Admin Settings
                                                </div>
                                            )}

                                            <div
                                                className="nav-btn"
                                                onClick={() => {
                                                    // signOut();
                                                }}
                                            >
                                                Sign Out
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    <div
                                        className="nav-btn"
                                        onClick={() => { 
                                            setToggleDropDown(prevState => !prevState);
                                            navigate("/signin");
                                        }}
                                    >
                                        Sign In
                                    </div>
                                </>
                            )
                        }
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Navbar;