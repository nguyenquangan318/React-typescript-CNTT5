import { combineReducers } from "redux";
import { productsReducer, type ProductType } from "./productsReducer";
import { cartReducer, type CartItem } from "./cartReducer";

export interface StateType {
    products: ProductType[]
    cart: CartItem[]
}

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})