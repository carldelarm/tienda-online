import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthContext";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

const Admin = () => {

    const { user,logout } = useContext(AuthContext);

    console.log('[Admin] user -> ',user);

    const history = useHistory();

    const handleLogout = () => {
        console.log('Se ha cerrado la sesión con exito');
        logout();
        history.push('/login');
    }

    return (
        <>
            <h1>Bienvenido al Módulo de Administración</h1>            
            <p>Usuario: {user.name}</p>

            <Button variant='contained' onClick={handleLogout}>Cerrar Sesión</Button>
        </>
    )
}

export default Admin
