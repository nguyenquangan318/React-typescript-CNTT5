
//B1: Xay dung giao dien
//B2: Setup redux
//B2.1: Khoi tao state ban dau (kieu du lieu + gia tri)
//B2.2: Xay dung kieu du lieu cho Action
//B2.3: Xay dung ham reducer
//B2.4: Xay dung store
//B2.5: Boc toan bo chuong trinh trong Provider
//B3: Lay state tu trong store (useSelector)
//B4: Hien thi ra giao dien

import Cart from "./components/Cart"
import ListProducts from "./components/ListProducts"
import "./App.css"

function App() {
  return (
    <div style={{ display: "flex" }}>
      <ListProducts></ListProducts>
      <Cart></Cart>
    </div>
  )
}

export default App