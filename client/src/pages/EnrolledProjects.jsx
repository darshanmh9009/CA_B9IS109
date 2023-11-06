import "../style/globals.css";
import "../style/project.css";
import "../style/enrolled.css";
import Project from "../Components/Projects/Project";

import { unchecked, inprog, done, cross } from "../assets/icons";
import Navbar from "../Components/Navbar";

export default function EnrolledProjects() {
    return (
        <>
            <Navbar />
            <div>
                <h1 className="medium-heading numpy page-heading">Enrolled</h1>

                <div className="enrolled">
                    <h1 className="small-heading numpy">On-going Projects:</h1>
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
                            id={2}
                            statusName={1}
                            status={inprog}
                            difficulty={2}
                            timereq={"20 hours"}
                            rating={5}
                            enrolled={true}
                        />
                        <Project
                            id={3}
                            statusName={1}
                            status={inprog}
                            difficulty={1}
                            timereq={"2 days"}
                            rating={5}
                            enrolled={true}
                        />
                    </div>


                    <h1 className="small-heading numpy">Completed Projects:</h1>
                    <div className="projects">
                        <Project
                            id={4}
                            statusName={1}
                            status={done}
                            difficulty={2}
                            timereq={"22 hours"}
                            rating={5}
                            enrolled={true}
                        />
                        <Project
                            id={5}
                            statusName={1}
                            status={done}
                            difficulty={1}
                            timereq={"1 day"}
                            rating={5}
                            enrolled={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}