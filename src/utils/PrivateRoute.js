import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ Component, ...rest }) => { 
  const navigate = useNavigate();

  const [token1, settoken1] = useState("")
  // Add your authentication logic here
 
  const tokenExpiration = localStorage.getItem("tokenExpiration");
  useEffect(() => {
    if (token1!==""){ settoken1(localStorage.getItem("token"))}
    else{navigate("/login")}
    console.log("token1", token1); 
  }, [token1])
  
  return token1 && tokenExpiration && Date.now() < parseInt(tokenExpiration) ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
