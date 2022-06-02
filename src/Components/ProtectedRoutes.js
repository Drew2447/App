import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AccountContext } from "../Provider/AccountProvider"


const ProtectedRoutes =()=>{
    const {user} = useContext(AccountContext)
    return user ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes