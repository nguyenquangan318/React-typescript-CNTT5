import { useEffect, useState } from "react"
import InputTask from "./components/InputTask"
import Tasks from "./components/Tasks"
import TasksStatus from "./components/TasksStatus"
import axios from "axios"
import { Pagination } from "antd"

interface Task {
  id: number,
  content: string,
  status: boolean
}

function App() {
  let [tasks, setTasks] = useState<Task[]>([])
  useEffect(() => {
    fetchData()
  }, [])

  //Ham lay du lieu tu server
  async function fetchData(currentPage: number = 1) {
    let res = await axios.get(`http://localhost:3000/tasks?_page=${currentPage}&_per_page=4`)
    console.log(res.data.data);
    setTasks(res.data.data)
  }

  return (
    <div>
      <h1>Quan ly cong viec</h1>
      <InputTask></InputTask>
      <TasksStatus></TasksStatus>
      <Tasks tasks={tasks}></Tasks>
      <Pagination defaultCurrent={1} total={50} onChange={(page) => {
        fetchData(page)
      }} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button style={{ padding: "7px", backgroundColor: "red", border: "none" }}>Xoa cong viec hoan thanh</button>
        <button style={{ padding: "7px", backgroundColor: "red", border: "none" }}>Xoa tat ca cong viec</button>
      </div>

    </div>
  )
}

export default App