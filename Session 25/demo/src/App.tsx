
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'

//<Router>
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App