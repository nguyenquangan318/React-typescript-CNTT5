import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import { decrement, increment, incrementByAmount } from "./counterSlice"


function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div style={{ paddingLeft: "20px" }}>{count}</div>
            <button onClick={() => {
                dispatch(increment())
            }}>+</button>
            <button onClick={() => {
                dispatch(decrement())
            }}>-</button>
            <br />
            <button onClick={() => {
                dispatch(incrementByAmount(123))
            }}>increase by amount</button>
        </div>
    )
}

export default Counter