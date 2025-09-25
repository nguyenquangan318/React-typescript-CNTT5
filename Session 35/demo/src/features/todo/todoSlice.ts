//B2.1: Xay dung state (Kieu du lieu + gia tri khoi tao)

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

//B2.2: Xay dung slice (reducer + state + action)(createSlice)
interface Todo {
    id: string,
    content: string,
    isDone: boolean
}

interface todoState {
    todos: Todo[],
    status: "idle" | "pending" | "fulfilled" | "rejected"
    error: any
}

const initialState: todoState = {
    todos: [],
    status: "idle",
    error: null
}

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async () => {
        try {
            const res = await axios.get("http://localhost:3000/todos")
            return res.data;
        } catch (err) {
            return err
        }
    }
)

export const addTodo = createAsyncThunk(
    "todos/addTodo",
    async (data: Todo) => {
        try {
            const res = await axios.post("http://localhost:3000/todos", data)
            return res.data
        } catch (err) {
            return err
        }
    }
)

export const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async (id: string) => {
        try {
            const res = await axios.delete(`http://localhost:3000/todos/${id}`)
            return res.data
        } catch (err) {
            return err
        }
    }
)

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => { state.status = "pending" })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.todos = action.payload
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.payload
            })
            .addCase(addTodo.pending, (state) => { state.status = "pending" })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.todos.push(action.payload)
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.payload
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.todos = state.todos.filter((todo) => todo.id != action.payload.id)
            })
    }
})

export default todoSlice.reducer