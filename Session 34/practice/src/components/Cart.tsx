import CartTable from "./CartTable"

function Cart() {
    return (
        <div style={{ width: "45%", marginLeft: "20px" }}>
            <div style={{ backgroundColor: "#f2dede", color: "#bf6865", padding: "5px", }}>
                <h3>Your cart</h3>
            </div>
            <CartTable></CartTable>
            <div style={{ backgroundColor: "#dff0d8", color: "#7da189" }}>
                <p>Add to cart succesfully</p>
            </div>
        </div>
    )
}

export default Cart