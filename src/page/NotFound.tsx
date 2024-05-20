import { Button } from "@mui/material"
import { useHistory } from "react-router-dom";

const NotFound = () => {

    const history = useHistory();

    return (
        <>
            <div className="contenedor-detalle">
                <h1>404</h1>
                <p>Lo sentimos, la página que estás buscando no existe.</p><br />
                <Button variant='contained' onClick={()=>history.push('/')}>Ir a la pagina principal</Button>
            </div>
        </>
    )
}

export default NotFound
