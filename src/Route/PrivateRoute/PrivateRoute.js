import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoaderSpinner from "../../components/LoaderSpinner";
import { AuthContex } from "../../Context/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContex)
    const location = useLocation()
    console.log(loading)

    if(!user && loading){
        return <LoaderSpinner></LoaderSpinner>
    }
    
    if(user && user.uid){
        return children ;
    }

    return <Navigate to="/login" state={{from:location}} replace/>


   
};

export default PrivateRoute;