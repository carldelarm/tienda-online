import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { Redirect } from "react-router-dom";

interface PrivateRouteProps {
    children: React.ReactNode;
}
  
const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuth } = useContext(AuthContext);
    return (
        isAuth ? children : <Redirect to="/login" />
    )
}

export default PrivateRoute