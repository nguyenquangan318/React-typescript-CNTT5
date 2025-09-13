
//B1: Tạo giao diện
//B2: Cấu hình router

import { RouterProvider } from "react-router";
import routers from "./routers/routers";
import "./App.css"

function App() {
  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default App