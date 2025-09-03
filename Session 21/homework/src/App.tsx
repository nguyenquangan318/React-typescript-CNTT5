//B1:Xay dung giao dien
//B2:Quản lý giá trị trong ô input (state, onChange)
//B3:Thay đổi tiêu đề theo giá trị ô input (effect)

import { useEffect, useState, type ChangeEvent } from "react"

function App() {
  const [userName, setUserName] = useState("")
  useEffect(() => {
    console.log("Giai đoạn đầu");
    document.title = `Chào, ${userName}`
  },[userName])
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value)
  }
  return (
    <div style={{
      backgroundColor: "#f9f9f9",
      width: "500px",
      height: "140px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h2>Chào mừng bạn đến với trang của chúng tôi!</h2>
      <input type="text" placeholder="Nhập tên của bạn" style={{ width: "80%" }} onChange={handleChange} />
      <p>Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường trên</p>
    </div>
  )
}

export default App