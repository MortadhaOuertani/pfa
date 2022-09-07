import React from "react";
import { Navigate } from "react-router-dom";

const Privetroutertwo = ({ children, user }) => {
  
    if(!user.isConnected){
        return <Navigate to="/signin" replace/>
    }
    return children
    

}
export default Privetroutertwo;    
