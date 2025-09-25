//B2: Xay dung store
//B2.1: Xay dung state (Kieu du lieu + gia tri khoi tao)
//B2.2: Xay dung slice (reducer + state + action)(createSlice)

import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

//B2.3: Tao store(configureStore)
interface CounterState {
    value: number
}
const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementByAmount: (state, action) => { state.value += action.payload }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer