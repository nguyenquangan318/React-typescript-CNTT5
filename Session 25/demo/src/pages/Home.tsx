import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"


function Home() {
    const navigate = useNavigate()
    return (
        <>
            <Header></Header>
            <p>Nội dung trang home</p>
            <Link to={"/about"}>Đường dẫn đến trang about</Link><br />
            <NavLink to={"/about"} className={({ isActive }) => isActive ? "color-red" : "color-blue"}>Đường dẫn đến trang home</NavLink>
            <Outlet></Outlet>
            <button onClick={() => { navigate("/about?id=1&name=An&id=2") }}>Chuyển trang</button>
            <Footer></Footer>
        </>
    )
}

export default Home