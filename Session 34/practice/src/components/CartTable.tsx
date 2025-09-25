import React from 'react'
import { useSelector } from 'react-redux'
import type { StateType } from '../store/reducers'

function CartTable() {
    const cart = useSelector((state: StateType) => state.cart)
    return (
        <div style={{ paddingBottom: "50px", textAlign: "center" }}>
            {cart.length === 0 ? <p>Khong co san pham trong gio</p> :
                <table style={{ width: "95%", margin: "10px" }}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th style={{ width: "100px" }}>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) =>
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price} USD</td>
                                <td><div>{item.quantity}</div></td>
                                <td>
                                    <button>Update</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>There are {cart.length} items in your cart</div>
                <div>{cart.reduce((total, item) => total + item.price, 0)} USD</div>
            </div>
        </div>
    )
}

export default CartTable