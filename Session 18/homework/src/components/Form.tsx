//B1: Xây dựng giao diện
//B2: Khởi tạo state quản lý giá trị trong ô input
import { useState } from "react"
//B3: Sử dụng state để điều khiển giao diện
function Form() {
    const [title, setTitle] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    return (
        <div>
            <input placeholder="Nhập nội dung" onChange={handleChange}></input>
            <p>{title}</p>
        </div>
    )
}

export default Form