import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"
import { useEffect, useState, type ChangeEvent } from "react"
import { fetchTodos, addTodo, deleteTodo } from "./todoSlice"

function Todolist() {
    const [inputTodo, setTodoInput] = useState("")
    const dispatch = useDispatch<AppDispatch>()
    const { todos, status, error } = useSelector((state: RootState) => state.todo)
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchTodos())
        }
    }, [])

    function handleAddTodo() {
        dispatch(addTodo(
            {
                id: String(Date.now()),
                content: inputTodo,
                isDone: false
            }
        ))

    }
    function handleDeleteTodo(id: string) {
        dispatch(deleteTodo(id))
    }
    return (
        <div>
            <input type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setTodoInput(event.target.value)
            }} />
            <button onClick={handleAddTodo}>Thêm</button>
            {todos.length === 0 ? <p>Không có công việc</p> :
                <ul>
                    {todos.map((todo) =>
                        <li key={todo.id}>{todo.content}
                            <button onClick={() => { handleDeleteTodo(todo.id) }}>Xóa</button>
                        </li>)}
                </ul>
            }
        </div>
    )
}

export default Todolist