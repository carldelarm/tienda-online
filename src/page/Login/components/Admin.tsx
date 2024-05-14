import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthContext";

const Admin = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>Módulo de Administración</h1>            
            <p>Bienvenido: {user.name}</p>
        </div>
    )
}

export default Admin
