import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { GRAPHQL_URL } from "./config";
import router from "./router";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const apolloClient = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
