import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Category from "../component/Category";

const PrivateRoute = () => {
	// TODO: Use authentication token
	const localStorageToken = localStorage.getItem("token");
  console.log(localStorageToken)

	return localStorageToken ? <Category /> : <Navigate to="/"  replace />;
};

export default PrivateRoute;