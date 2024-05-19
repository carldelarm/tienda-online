import {
    Switch,
    Route,
  } from "react-router-dom";
import Home from "../page/Home";
import DetalleProducto from "../page/DetalleProducto";
import Login from "../page/Login/Login";
import Admin from "../page/Login/components/Admin";
import PrivateRoute from "./PrivateRoute";
import PaymentProvider from "../store/PaymentProvider";
import Carrito from "../page/Carrito";

const Rutas = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/admin">
        <PrivateRoute>
          <Admin />
        </PrivateRoute>
      </Route>
      <Route exact path="/">
        <PaymentProvider>
          <Home />
        </PaymentProvider>
      </Route>
      <Route exact path="/detalle/:slug">
        <PaymentProvider>
          <DetalleProducto />
        </PaymentProvider>
      </Route>
      <Route exact path="/carrito">
        <PaymentProvider>
          <Carrito />
        </PaymentProvider>
      </Route>
      <Route path="/*">
        <h1>404</h1>
      </Route>
    </Switch>
  )
}

export default Rutas
