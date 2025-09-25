

interface Task {
  id: number,
  content: string,
  status: boolean
}

function Tasks({ tasks }: { tasks: Task[] }) {
  return (
    <div>
      {tasks.length === 0 && <p>Chua co cong viec nao</p>}
      {tasks.map((task) =>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid black",
          padding: "8px",
          margin: "10px 0px",
        }}
          key={task.id}
        >
          <div>
            <input type="checkbox" style={{ marginRight: "10px" }} />
            <span>{task.content}</span>
          </div>
          <div>
            <button style={{ marginRight: "10px" }}>Sua</button>
            <button>Xoa</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Tasks