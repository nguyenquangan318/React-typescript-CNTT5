import { useSearchParams } from "react-router-dom"


function About() {
    const [searchParams] = useSearchParams();
    console.log(searchParams.getAll("id"));

    return (
        <>
            <h3>Nội dung giới thiệu</h3>
            <p>Nội dung trang about
            </p>
        </>
    )
}

export default About