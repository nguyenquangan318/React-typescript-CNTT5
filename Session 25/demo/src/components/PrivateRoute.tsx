import type { ReactElement } from "react"
import { Navigate } from "react-router-dom"


function PrivateRoute({ children }: { children: ReactElement }) {
    return (
        false ? children : < Navigate to="notFound" ></ Navigate>
    )
}

export default PrivateRoute