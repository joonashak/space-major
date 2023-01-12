import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
