import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../store"


const ProtectedRoute = () => {
    const trainer = useAppSelector(value => value.trainer.trainer)

    if(trainer.length >= 3){
        return <Outlet/>
    }else{
        return <Navigate to='/'/>
    }
  
}
export default ProtectedRoute