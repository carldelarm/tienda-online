import {
    Switch,
    Route,
  } from "react-router-dom";
import Home from "../page/Home";
import DetalleProducto from "../page/DetalleProducto";


const Rutas = () => {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/detalle/:slug">
            <DetalleProducto />
        </Route>
        <Route path="/*">
            <h1>404</h1>
        </Route>
    </Switch>
  )
}

export default Rutas
