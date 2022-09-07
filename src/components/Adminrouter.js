import React from "react";
import { Navigate } from "react-router-dom";

const AdminRouter = ({ children, user }) => {
  if (!user.isConnected) {
    return <Navigate to="/signin" replace />;
  } 
  else {
    if (user.role !== "ADMIN") {
      return <Navigate to="/noaccess" replace />;
    }
  }
  return children
};
export default AdminRouter;
