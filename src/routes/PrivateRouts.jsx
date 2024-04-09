import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";


const PrivateRouts = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    console.log(location);

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>;
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRouts;