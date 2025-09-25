
function InputTask() {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", borderRadius:"5px"}}>
      <input style={{
        width: "97%",
        marginBottom: "10px",
        height: "30px"
      }} placeholder='Nhap ten cong viec'></input>
      <br></br>
      <button style={{ width: "100%", height: "30px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px" }}>Them cong viec </button>
    </div>
  )
}

export default InputTask