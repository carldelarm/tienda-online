import { ThemeProvider} from "@mui/material"
import { theme } from "./styles/Temas";

import {
  BrowserRouter as Router,
} from "react-router-dom";
import Rutas from "./routers/Rutas";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Rutas />
      </Router>
    </ThemeProvider>
  )
}

export default App
