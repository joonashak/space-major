import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "@fontsource/inter";
import { CssBaseline } from "@mui/joy";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthenticationGuard from "./AuthenticationGuard.tsx";
import Dashboard from "./Dashboard.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Layout from "./Layout.tsx";
import LoginPage from "./LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AuthenticationGuard />,
        errorElement: <LoginPage />,
        children: [{ path: "/", element: <Dashboard /> }],
      },
    ],
  },
]);

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URL,
  cache: new InMemoryCache(),
  credentials: "include",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
