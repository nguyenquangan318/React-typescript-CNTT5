//B2.1: Khoi tao state ban dau (kieu du lieu + gia tri)
//B2.2: Xay dung kieu du lieu cho Action
//B2.3: Xay dung ham reducer
//B2.4: Xay dung store

import type { ProductType } from "./productsReducer"

export interface CartItem {
    id: number,
    name: string,
    quantity: number,
    price: number
}

const initCart: CartItem[] = []
type Action = { type: "BUY", payload: ProductType }
export function cartReducer(state = initCart, action: Action) {
    switch (action.type) {
        case "BUY":
            const { payload } = action
            let item = state.find((item) => item.id === payload.id)
            if (item) {
                item.quantity += 1
                return [...state]
            }
            return [...state, {
                id: payload.id,
                name: payload.name,
                price: payload.price,
                quantity: 1
            }]
        default:
            return state
    }

}