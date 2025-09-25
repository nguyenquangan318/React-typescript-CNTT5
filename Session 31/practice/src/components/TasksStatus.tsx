import React from 'react'

function TasksStatus() {
  return (
    <div style={{
      border: "1px solid black",
      padding: "20px",
      marginTop: "10px",
      display: "flex",
      gap: "20px",
      justifyContent: "center"
    }}>
      <button style={{ padding: "7px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px" }}>Tat ca</button>
      <button>Hoan thanh</button>
      <button>Dang thuc hien</button>
    </div>
  )
}

export default TasksStatus