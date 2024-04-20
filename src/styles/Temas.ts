import { createTheme } from "@mui/material";

  // a new theme is created every time the mode changes
  export const theme = createTheme({
    palette: {
      primary: {
        main: '#42a5f5',
      },
      secondary: {
        main: '#5e35b1',
      },
    },
    // ...your custom theme
  });