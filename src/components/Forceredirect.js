import React from "react";
import { Navigate } from "react-router-dom";

const Forceredirect = ({ children, user }) => {
  
    if(user.isConnected){
        return <>
        <Navigate to="/#" replace/>
    </>
    }
    return children

}
export default Forceredirect;    
