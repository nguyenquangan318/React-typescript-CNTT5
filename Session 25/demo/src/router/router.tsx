import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Notfound from "../pages/Notfound";
import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/home", element: <Home></Home>, children: [
            { path: "about", element: <About></About> }
        ]
    },
    { path: "/about", element: <PrivateRoute><About></About></PrivateRoute> },
    { path: "/notFound", element: <Notfound></Notfound> },
    { path: "/test", element: <Navigate to={"/about"}></Navigate> },
    { path: "/product/:id", element: <Product></Product> },
    { path: "*", element: <Notfound></Notfound> }

])