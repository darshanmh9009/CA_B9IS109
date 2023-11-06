import { useState } from "react";
import Project from "../Components/Projects/Project";
import Navbar from "../Components/Navbar";
import EditProfile from "./Forms/ProfileEdit";
import "../style/globals.css";
import "../style/form.css";
import "../style/profile.css";
import "../style/project.css";

import { bday, email, fire, gender, location, phone, site, unchecked, inprog, done, cross } from "../assets/icons";
import { user } from "../assets/images";
import Footer from "../Components/Footer";

export default function Profile() {

    const [details, setDetails] = useState({
        name: "John Doe",
        designation: "Student",
        location: "Ireland",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam ex laborum iusto commodi culpa?",
        streaks: 5,
        longestStreaks: 15,
        longestStreaksDate1: "June 30, 23",
        longestStreaksDate2: "June 15, 23",
        phone: "+",
        email: "abc@gmail.com",
        site: "helloworld.com",
        bday: "1 Jan, 2023",
        gender: "Male",
        skills: [],
        ongoingProj: [],
        compProj: [],
    });

    // below javascript is for editProfile form

    const [editForm, setEditForm] = useState(false);
    const [msg, setMsg] = useState("");

    return (
        <>
            <Navbar />
            
            <section className={editForm ? "profile block-scroll" : "profile"}>
                <div className="top flex">
                    <div className="left-top">
                        <img
                            className="profile-pic"
                            src={user}
                            alt="user profile photo"
                        ></img>
                        <div
                            className="small-hidden edit-btn"
                            onClick={() => { setEditForm(prevState => !prevState) }}
                        >
                            Edit Profile
                        </div>
                        {/* only visible in smaller screens */}
                        <div className="big-hidden">
                            <h1 className="medium-heading numpy">{details.name}</h1>
                            <span className="profile-designation" id="blue-bg-color">{details.designation}</span>
                            <div className="flex location-div">
                                <img
                                    src={location}
                                    alt="location icon"
                                ></img>

                                <span className="location-name">
                                    {details.location}
                                </span>
                            </div>
                            <div
                                className="edit-btn"
                                onClick={() => { setEditForm(prevState => !prevState) }}
                            >
                                Edit Profile
                            </div>
                        </div>
                    </div>
                    <div className="right-top">
                        {/* only visible in bigger screens */}
                        <div className="flex small-hidden">
                            <h1 className="big-heading numpy">
                                {details.name}
                            </h1>
                            <div className="flex location-div">
                                <img
                                    src={location}
                                    alt="location icon"
                                    width={20}
                                    height={20}
                                ></img>
                                <span className="location-name">
                                    {details.location}
                                </span>
                            </div>
                        </div>

                        <span className="profile-designation small-hidden" id="blue-bg-color">{details.designation}</span>
                        {/* only visible in bigger screens ends here */}

                        <div className="flex gap-15 bio-flex">
                            <div className="bio">
                                <p className="bio-title">
                                    Bio:
                                </p>
                                <p className="bio-body">
                                    {details.bio}
                                </p>
                            </div>
                            <div className="streaks">
                                <p className="bio-title">
                                    Streaks:
                                </p>
                                <div className="bio-body streaks-body">
                                    <div className="streaks-body">
                                        <div>
                                            <div className="current-streak">
                                                <img
                                                    className="fire-icon"
                                                    src={fire}
                                                    alt="fire icon"
                                                ></img>
                                                {details.streaks}
                                            </div>
                                            <p className="strek-title">Current Streak</p>
                                        </div>

                                        <div className="longest-streak">
                                            <p className="longest-streak-no" id="yellow-bg-color">{details.longestStreaks}</p>
                                            <p className="strek-title">Longest Streak</p>
                                            <p className="streak-date">
                                                {details.longestStreaksDate1} - {details.longestStreaksDate2}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="middle">
                    <div className="left-middle">
                        {/* Contact Title */}
                        <h1 className="small-heading numpy">Contact Details: </h1>
                        {/* Contact Items */}
                        <li className="contact-item" id="blue-bg-color">
                            <img
                                className="contact-icon"
                                src={phone}
                                alt="phone icon"
                            ></img>

                            <span>: {details.phone}</span>
                        </li>

                        <li className="contact-item" id="green-bg-color">
                            <img
                                className="contact-icon"
                                src={email}
                                alt="email icon"
                            ></img>

                            <span>: {details.email}</span>
                        </li>

                        <li className="contact-item" id="violet-bg-color">
                            <img
                                className="contact-icon"
                                src={site}
                                alt="phone icon"
                            ></img>

                            <span>: {details.site}</span>
                        </li>

                        {/* Contact Title */}
                        <h1 className="small-heading numpy">Basic Info: </h1>
                        {/* Contact Items */}
                        <li className="contact-item" id="yellow-bg-color">
                            <img
                                className="contact-icon"
                                src={bday}
                                alt="bday icon"
                            ></img>

                            <span>: {details.bday}</span>
                        </li>

                        <li className="contact-item" id="orange-bg-color">
                            <img
                                className="contact-icon"
                                src={gender}
                                alt="gender icon"
                            ></img>

                            <span>: {details.gender}</span>
                        </li>

                        {/* Skills Title */}
                        <h1 className="small-heading numpy">Skills: </h1>

                        {/* Contact Items */}
                        <li className="none-text">
                            <span>-- No Skills Yet --</span>
                        </li>
                    </div>

                    <div className="right-middle">
                        <h1 className="small-heading numpy">Ongoing Projects: </h1>

                        <div className="projects">
                            <Project
                                id={1}
                                statusName={1}
                                status={inprog}
                                difficulty={0}
                                timereq={"10 hours"}
                                rating={3}
                                enrolled={true}
                            />
                            <Project
                                id={1}
                                statusName={1}
                                status={inprog}
                                difficulty={2}
                                timereq={"20 hours"}
                                rating={5}
                                enrolled={true}
                            />
                            <Project
                                id={2}
                                statusName={1}
                                status={inprog}
                                difficulty={1}
                                timereq={"2 days"}
                                rating={5}
                                enrolled={true}
                            />
                        </div>

                        <h1 className="small-heading numpy">Completed Projects: </h1>

                        <div className="projects">
                            <Project
                                id={3}
                                statusName={2}
                                status={done}
                                difficulty={0}
                                timereq={"22 hours"}
                                rating={4}
                                enrolled={true}
                            />
                            <Project
                                id={4}
                                statusName={2}
                                status={done}
                                difficulty={1}
                                timereq={"1 day"}
                                rating={3}
                                enrolled={true}
                            />
                        </div>

                        <div className="none-text">
                            There are no projects avaialbe here
                        </div>
                    </div>
                </div>

                {/* Further addition of more sections can be made here */}
                
                {/* <div className="bottom">
                    <div className="left-bottom"></div>
                    <div className="right-bottom"></div>
                </div> */}
            </section>

            {editForm && (
                <section className="edit-modal">
                    <div onClick={() => { setEditForm(prevState => !prevState) }}>
                        <img
                            className="close-icon"
                            src="/assets/icons/close.png"
                            alt="close icon"
                        ></img>
                    </div>
                    <EditProfile />
                </section>
            )}

            <Footer />
        </>
    )
}