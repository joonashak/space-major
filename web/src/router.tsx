import { createBrowserRouter } from "react-router-dom";
import AuthenticationGuard from "./AuthenticationGuard.tsx";
import Layout from "./Layout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";

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
        // children: [{ path: "/", element: <Dashboard /> }],
        children: [
          {
            path: "/op",
            children: [
              {
                path: ":opName",
                element: <Dashboard />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
