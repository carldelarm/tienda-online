import { ThemeProvider} from "@mui/material"
import Home from "./page/Home";
import { theme } from "./styles/Temas";


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
