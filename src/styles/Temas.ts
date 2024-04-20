import { createTheme } from "@mui/material";

  // a new theme is created every time the mode changes
  export const theme = createTheme({
    palette: {
      primary: {
        main: '#ff4400',
      },
      secondary: {
        main: '#f50057',
      },
    },
    // ...your custom theme
  });