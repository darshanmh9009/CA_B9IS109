import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../style/project.css";
import { plus, sort, statusIcon, unchecked, inprog, done, cross } from "../assets/icons";
import { projectsInfo2 } from "../assets/images";
import Project from "../Components/Projects/Project";

const Projects = (props) => {
    const navigate = useNavigate();

    const status = ["unchecked", "inprog", "done", "cross"];

    // useState to display create project button
    const [createRights, setCreateRights] = useState(true); // change true with (props.createRights)
    // useStates to show Menu to the user
    const [sortMenu, setSortMenu] = useState(false);
    const [statusMenu, setStatusMenu] = useState(false);
    // useRef to close modals on user's random click
    const sortRef = useRef();
    const statusRef = useRef();
    const sortMenuRef = useRef();
    const statusMenuRef = useRef();
    // useEffect gets called every time filter buttons are clicked
    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (e.target !== sortRef.current && e.target !== statusRef.current && e.target !== statusMenuRef.current) {
                setSortMenu(false);
                setStatusMenu(false);
            }

            if (e.target === sortRef.current && statusMenu == true) {
                setStatusMenu(false);
            }

            if (e.target === statusRef.current) {
                setSortMenu(false);
            }
        })
    })

    return (
        <>
            <Navbar />

            <div>
                <div className="projects-heading flex">
                    <div className="project-flex">
                        <h1 className="big-heading numpy">Projects</h1>
                        <p className="big-text">
                            There are several projects.
                            Choose that you feel will shine your resume out in the crowd.
                            Add filters that help you pick the right choice.
                            Click on "learn more" to view details about the project.
                        </p>

                        {/* Make this change: if the user is admin, 
                        he/she shall view only the add new project 
                        button, else if it is a normal user/student, 
                        view enrolled projects button shall be visible */}

                        {createRights && (
                            <div 
                                onClick={() => {navigate("/projects/add-new")}}
                                className="add-project flex"
                            >
                                <img
                                    className="contact-icon"
                                    src={plus}
                                    alt="plus icon"
                                ></img>
                                <p>
                                    Add New Project
                                </p>
                            </div>
                        )}

                        <div 
                            onClick={() => {navigate("/projects-enrolled")}}
                            className="add-project flex"
                        >
                            <p>
                                View enrolled projects
                            </p>
                        </div>
                        
                    </div>

                    <div>
                        <img
                            className="projects-info-img"
                            src={projectsInfo2}
                            alt="project page image"
                        ></img>
                    </div>
                </div>

                <div className="projects-heading">
                    <div className="projects-filters flex">
                        <div
                            ref={sortRef}
                            className="filter-btn flex"
                            onClick={() => { setSortMenu(prevState => !prevState) }}>
                            Sort
                            <img
                                onClick={() => { setSortMenu(prevState => !prevState) }}
                                className="sort-icon"
                                src={sort}
                                alt="sort icon"
                                // width={30}
                                // height={30}
                            ></img>
                        </div>

                        {sortMenu && (
                            <div
                                ref={sortMenuRef}
                                className="menu"
                                id="sort-menu">
                                <div className="menu-item flex">
                                    <input
                                        className="radio-btn"
                                        type="radio"
                                        value="difficulty"
                                        name="sort"
                                        id="difficulty"
                                    />
                                    <label for="difficulty">Difficulty</label>
                                </div>

                                <div className="menu-item flex">
                                    <input
                                        className="radio-btn"
                                        type="radio"
                                        value="time-req"
                                        name="sort"
                                        id="time-req"
                                    />
                                    <label for="time-req">Time Required</label>
                                </div>

                                <div className="menu-item flex">
                                    <input
                                        className="radio-btn"
                                        type="radio"
                                        value="industry-rating"
                                        name="sort"
                                        id="industry-rating"
                                    />
                                    <label for="industry-rating">Industry Rating</label>
                                </div>

                                <div
                                    className="menu-item done-btn"
                                    onClick={() => { setSortMenu(prevState => !prevState) }}>
                                    Clear
                                </div>

                                <div
                                    className="menu-item done-btn"
                                    onClick={() => { setSortMenu(prevState => !prevState) }}>
                                    Done
                                </div>
                            </div>
                        )}

                        <div
                            ref={statusRef}
                            className="filter-btn flex"
                            onClick={() => { setStatusMenu(prevState => !prevState) }}>
                            Status
                            <img
                                onClick={() => { setStatusMenu(prevState => !prevState) }}
                                className="status-icon"
                                src={statusIcon}
                                alt="status icon"
                            ></img>
                        </div>

                        {statusMenu && (
                            <div
                                ref={statusMenuRef}
                                className="menu"
                                id="status-menu">
                                <div className="menu-item flex">
                                    <input
                                        className="radio-btn"
                                        type="radio"
                                        value="difficulty"
                                        name="sort"
                                        id="difficulty"
                                    />
                                    <label for="difficulty">Begineer Friendly</label>
                                </div>

                                <div className="menu-item flex">
                                    <input
                                        className="radio-btn"
                                        type="radio"
                                        value="time-req"
                                        name="sort"
                                        id="time-req"
                                    />
                                    <label for="time-req">Few pre-requisits</label>
                                </div>

                                <div className="menu-item flex">
                                    <input
                                        className="radio-btn"
                                        type="radio"
                                        value="industry-rating"
                                        name="sort"
                                        id="industry-rating"
                                    />
                                    <label for="industry-rating">Professional</label>
                                </div>

                                <div
                                    className="menu-item done-btn">
                                    Clear
                                </div>

                                <div
                                    className="menu-item done-btn">
                                    Done
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="projects">
                    <Project
                        id={1}
                        statusName={0}
                        status={unchecked}
                        difficulty={0}
                        timereq={"10 hours"}
                        rating={3}
                    />

                    <Project
                        id={2}
                        statusName={1}
                        status={inprog}
                        difficulty={1}
                        timereq={"10 hours"}
                        rating={5}
                    />

                    <Project
                        id={3}
                        statusName={0}
                        status={unchecked}
                        difficulty={2}
                        timereq={"3 Days"}
                        rating={2}
                    />

                    <Project
                        id={4}
                        statusName={0}
                        status={unchecked}
                        difficulty={2}
                        timereq={"10 hours"}
                        rating={5}
                    />

                    <Project
                        id={5}
                        statusName={0}
                        status={unchecked}
                        difficulty={1}
                        timereq={"10 hours"}
                        rating={5}
                    />

                    <Project
                        id={6}
                        statusName={3}
                        status={cross}
                        difficulty={0}
                        timereq={"10 hours"}
                        rating={2}
                    />

                    <Project
                        id={7}
                        statusName={2}
                        status={done}
                        difficulty={0}
                        timereq={"10 hours"}
                        rating={3}
                    />

                    <Project
                        id={8}
                        statusName={2}
                        status={done}
                        difficulty={1}
                        timereq={"10 hours"}
                        rating={5}
                    />

                    <Project
                        id={9}
                        statusName={3}
                        status={cross}
                        difficulty={1}
                        timereq={"7 days"}
                        rating={3}
                    />

                    <Project
                        id={10}
                        statusName={0}
                        status={unchecked}
                        difficulty={0}
                        timereq={"2 days"}
                        rating={3}
                    />
                </div>

                <div className="view-more">
                    View All
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Projects
