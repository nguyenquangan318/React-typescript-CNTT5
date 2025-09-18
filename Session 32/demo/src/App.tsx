//B1: Tao store
//Tao
//B2: Tao component
//B3: Dung redux

import { useSelector } from "react-redux"

function App() {
  const state = useSelector((state) => { state })
  console.log(state);

  return (
    <div>App</div>
  )
}

export default App