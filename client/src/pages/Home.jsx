import "../style/globals.css";
import "../style/home.css";
import { useNavigate } from "react-router-dom";

import ContactUs from "../Components/ContactUs";
// importing assets
import { mainImg, boxImg1, boxImg2, laptop, whyUs, stars, fourStar, quote, support } from "../assets/images";
import { email, goArrow, phone } from "../assets/icons";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            
            <section className="section main-sec">
                <div className="main-text">
                    <h1 className="big-heading numpy">LEARN <br />TO USE <br />WHAT YOU <br />LEARN</h1>
                    <p className="big-text main-para">Develop usable coding skills through project based learning. Become industry ready and land better jobs!</p>
                    <div 
                        className="explore-btn"
                        onClick={() => {navigate("/projects")}}>
                        <p className="big-text">Explore Projects</p>
                    </div>
                </div>
                <div className="main-img">
                    <img
                        src={mainImg}
                        alt="main image"
                        width={500}
                        height={600}
                    ></img>
                </div>
            </section>

            <section className="section box-sec">
                <div className="box flex">
                    <div className="box-left">
                        <img
                            className="box-img1"
                            src={boxImg1}
                            alt="box image"
                        ></img>
                    </div>
                    <div className="box-right">
                        <p className="numpy">Develop skills through projects</p>
                    </div>
                </div>
                <div className="box flex">
                    <div className="box-left">
                        <img
                            className="box-img2"
                            src={boxImg2}
                            alt="box image"
                        ></img>
                    </div>
                    <div className="box-right">
                        <p className="numpy">BECOME INDUSTRY READY</p>
                    </div>
                </div>
            </section>

            <section className="section best-projects flex m-in-auto gap-15">
                <div className="flex gap-15 project-div">
                    <div className="best-project"></div>
                    <div className="best-project"></div>
                    <div className="best-project"></div>
                </div>
                <div className="flex gap-15">
                    <div className="projects-info">
                        <img
                            className="laptop-img"
                            src={laptop}
                            alt="laptop image"
                        ></img>
                        <div className="projects-text">
                            <h1 className="small-heading numpy">
                                GET JOB READY SKILLS
                            </h1>
                            <p className="big-text projects-text">
                                Understand the concepts better and never forget them!
                            </p>
                            <div to="/projects" className="explore-btn projects-btn">
                                <p className="big-text">View All Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section why-us flex">
                <div className="why-text">
                    <h1 className="medium-heading numpy">WHY US?</h1>

                    <p className="big-text why-para">We curate our courses carefully and update them on regular intervals. We make sure that we offer: </p>

                    <li className="flex why-list-item gap-15 big-text">
                        <img
                            className="goarrow"
                            src={goArrow}
                            alt="arrow icon"
                        ></img>
                        Engaging and Releavnt Projects
                    </li>

                    <li className="flex why-list-item gap-15 big-text">
                        <img
                            className="goarrow"
                            src={goArrow}
                            alt="arrow icon"
                        ></img>
                        Add-to-Resume Projects
                    </li>

                    <li className="flex why-list-item gap-15 big-text">
                        <img
                            className="goarrow"
                            src={goArrow}
                            alt="arrow icon"
                        ></img>
                        Practical Skill Developement
                    </li>

                    <li className="flex why-list-item gap-15 big-text">
                        <img
                            className="goarrow"
                            src={goArrow}
                            alt="arrow icon"
                        ></img>
                        Personal Support From Mentors
                    </li>
                </div>
                <div className="why-img">
                    <img
                        className="why-image"
                        src={whyUs}
                        alt="why us image"
                    ></img>
                </div>
            </section>

            <section className="section most-viewed">
                <div className="most-viewed-title flex">
                    <h1 className="medium-heading numpy">ITS ALWAYS GOOD TO READ</h1>
                    <img
                        className="stars-img"
                        src={stars}
                        alt="stars image"
                    ></img>
                </div>

                <div className="best-blogs flex">
                    <div onClick={() => {navigate("/blogs/1")}} className="best-blog" id="orange">
                        <h1>BLOG 1</h1>
                    </div>

                    <div onClick={() => {navigate("/blogs/2")}} className="best-blog" id="yellow">
                        <h1>BLOG 2</h1>
                    </div>

                    <div onClick={() => {navigate("/blogs/3")}} className="best-blog" id="blue">
                        <h1>BLOG 3</h1>
                    </div>
                </div>
                <div to="/blogs" className="explore-btn m-in-auto">
                    <p onClick={() => {navigate("/blogs")}} className="big-text">Read Blogs</p>
                </div>
            </section>

            <section className="section contact-us flex">
                <div className="contact-left">
                    <div className="form-div">
                        <ContactUs />
                    </div>
                </div>
                <div className="contact-right flex">
                    <div className="contact-left">
                        <div className="testimonials">
                            <p className="testimonial-text">
                                Clients <br />Testimonial
                            </p>

                            <img
                                className="testimonial-pic"
                                src={fourStar}
                                alt="stars image"
                            ></img>
                        </div>
                        <div className="testimonials">
                            <img
                                className="quotation"
                                src={quote}
                                alt="quotation mark"
                            ></img>

                            <p className="quote big-text">
                                I think this is a great initiative you have started in the field of education!
                            </p>
                        </div>
                        <div className="quote-name">
                            <h1 className="numpy">
                                Sridhar Rajagopalan MD
                            </h1>
                            <p className="big-text">
                                Educationist
                            </p>
                        </div>
                    </div>
                    <div className="contact-right">
                        <h1 className="medium-heading numpy support-h1">
                            Support
                        </h1>

                        <img
                            className="support-img"
                            src={support}
                            alt="stars image"
                        ></img>

                        <div className="flex support-icons">
                            <div className="sup-icon">
                                <img
                                    className="sup-icon-img"
                                    src={email}
                                    alt="email icon"
                                ></img>
                                <a className="big-text" href="mailto:abc@gmail.com">
                                    abc@gmail.com
                                </a>
                            </div>

                            <div className="sup-icon">
                                <img
                                    className="sup-icon-img"
                                    src={phone}
                                    alt="phone icon"
                                ></img>
                                <a className="big-text" href="tel:0000000000">
                                    +91 00000-00000
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home
