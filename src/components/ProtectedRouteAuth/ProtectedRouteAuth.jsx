import { Navigate } from "react-router-dom";

const ProtectedRouteAuth = (props) => {
  if (!localStorage.getItem("token")) {
    return props.children;
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
};

export default ProtectedRouteAuth;
