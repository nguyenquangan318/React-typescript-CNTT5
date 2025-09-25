
//B1: Xay dung giao dien
//B2: Xay dung store
//B2.1: Xay dung state (Kieu du lieu + gia tri khoi tao)
//B2.2: Xay dung slice (reducer + state + action)(createSlice)
//B2.3: Tao store(configureStore)

import Todolist from "./features/todo/Todolist"

//B3: Lay du lieu tu trong store (useSelector)
function App() {
  return (
    <div>
      <Todolist></Todolist>
    </div>
  )
}

export default App