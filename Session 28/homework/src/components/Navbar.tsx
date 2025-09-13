import { Link, NavLink } from "react-router"

function Navbar() {
    return (
        <div style={{ backgroundColor: "blue", display: "flex", color: "white" }}>
            <div style={{ marginRight: "10px" }}><NavLink to="/" style={{ color: "white", textDecoration: "none" }} className={({ isActive }) => isActive ? "underline" : ""}>Home</NavLink></div>
            <div style={{ marginRight: "10px" }}><NavLink to="/about" style={{ color: "white", textDecoration: "none" }} className={({ isActive }) => isActive ? "underline" : ""}>About</NavLink></div>
            <div style={{ marginRight: "10px" }}><NavLink to="/contact" style={{ color: "white", textDecoration: "none" }} className={({ isActive }) => isActive ? "underline" : ""}>Contact</NavLink></div>
        </div>
    )
}

export default Navbar