import React, { useReducer } from 'react'

//B1: Xây dựng kiểu dữ liệu cho state
interface State {
    count: number
    name: string
}
//B2: Xây dựng kiểu dữ liệu cho action
type Action = { type: "INCREASE" } |
{ type: "DECREASE" } |
{ type: "SET_NAME", payload: string }
//B3: Xây dựng hàm reducer
function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREASE":
            return {
                ...state,
                count: state.count - 1
            }
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}
//B4: Sử dụng useReducer

function DemoUseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0, name: '' })
    return (
        <>
            <h1>DemoUseReducer</h1>
            <p>{state.name}</p>
            <p>{state.count}</p>
            <button onClick={() => { dispatch({ type: "INCREASE" }) }}>Tăng</button>
            <button onClick={() => { dispatch({ type: "DECREASE" }) }}>Giảm</button>
            <button onClick={() => { dispatch({ type: "SET_NAME", payload: "Tên mới" }) }}>Đặt tên</button>
        </>
    )
}

export default DemoUseReducer