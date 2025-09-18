
const initState = 0

type Action = { type: string, payload?: number }

export function countReducer(state = initState, action: Action) {
    switch (action.type) {
        case "INCREASE":
            return state + 1
        default:
            return state
    }
}