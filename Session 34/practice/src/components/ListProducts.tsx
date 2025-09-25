import { useSelector } from "react-redux"
import Product from "./Product";
import type { StateType } from "../store/reducers";


function ListProducts() {
    const products = useSelector((state: StateType) => { return state.products })
    console.log(products);

    return (
        <div>
            <div style={{ backgroundColor: "#337ab7", color: "white", padding: "5px" }}>
                <h3>list Products</h3>
            </div>
            <div>
                {products.map((product) => <Product key={product.id} product={product}></Product>)}
            </div>
        </div>
    )
}

export default ListProducts