import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

const routers = createBrowserRouter([
    
    { path: "/", element: <Home></Home> },
    { path: "/contact", element: <Contact></Contact> },
    { path: "/about", element: <About></About> }
])

export default routers