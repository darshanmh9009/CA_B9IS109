import { createBrowserRouter } from "react-router-dom";
// importing public pages
import Home from "../pages/Home.jsx";
import Profile from "../pages/Profile.jsx";
import Projects from "../pages/Projects.jsx";
import ProjectInfo from "../pages/ProjectInfo.jsx";
import EnrolledProjects from "../pages/EnrolledProjects";
import ProjectDetails from "../pages/Project/ProjectDetails.jsx";
import AddProject from "../pages/AddProject.jsx"
// /pages/Forms/---
import SignIn from "../pages/Forms/SignIn.jsx";
import SignUp from "../pages/Forms/SignUp.jsx";

// /pages/Blogs/---
import Blogs from "../pages/Static/Blogs.jsx";
import Blog from "../pages/Blogs/Blog.jsx";

// /pages/Static/---
import About from "../pages/Static/About.jsx";
import Pricing from "../pages/Static/Pricing.jsx";
import Error from "../pages/Static/Error.jsx";

// importing admin pages
import Admin from "../pages/Admin/Admin.jsx";
import Project from "../Components/Projects/Project.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        error: <Error />
    }, {
        path: "/signin",
        element: <SignIn />,
        error: <Error />
    }, {
        path: "/signup",
        element: <SignUp />,
        error: <Error />
    }, {
        path: "/blogs",
        element: <Blogs />,
        error: <Error />
    }, {
        path: "/blogs/:blogId",
        element: <Blog />,
        error: <Error />
    }, {
        path: "/blog", 
        element: <Blog />, 
        error: <Error />
    }, {
        path: "/about",
        element: <About />,
        error: <Error />
    }, {
        path: "/pricing",
        element: <Pricing />,
        error: <Error />
    }, {
        path: "/admin",
        element: <Admin />,
        error: <Error />
    }, {
        path: "/profile",
        element: <Profile />,
        error: <Error />
    }, {
        path: "/projects",
        element: <Projects />,
        error: <Error />
    }, {
        path: "/project-info", 
        element: <ProjectInfo />, 
        error: <Error />
    }, {
        path: "/projects-enrolled", 
        element: <EnrolledProjects />, 
        error: <Error />
    }, {
        path: "/projects-enrolled/:id",
        element: <ProjectDetails />, 
        error: <Error />
    }, {
        path: "/projects/add-new", 
        element: <AddProject />, 
        error: <Error />
    }, {
        // path: "/"
    }
]);

export default router;