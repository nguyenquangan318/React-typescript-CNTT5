import { useDispatch } from "react-redux";
import type { ProductType } from "../store/reducers/productsReducer"

function Product({ product }: { product: ProductType }) {
    const dispatch = useDispatch()
    return (
        <div style={{ display: "flex", margin: "20px" }}>
            <img src={product.img} alt="" style={{ height: "80px" }} />
            <div style={{ padding: "0px 15px" }}>
                <h5>{product.name}</h5>
                <p>{product.description}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ border: "1px solid black", paddingLeft: "10px" }}>{product.amount}</div>
                <button
                    style={{ width: "60px", backgroundColor: "#ff6633", color: "white", border: "none", padding: "5px" }}
                    onClick={() => {
                        dispatch({
                            type: "BUY",
                            payload: product
                        })
                    }}
                >{product.price} USD</button>
            </div>
        </div>
    )
}

export default Product