import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/authContext"


export const PublicRoute = ({children}) => {

    const { user } = useContext(AuthContext)
    const location = localStorage.getItem('lastPath')

    console.log(location)

  return !user.logged
        ? children
        : <Navigate to={location} />
}
