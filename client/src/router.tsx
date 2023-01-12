import { createBrowserRouter } from "react-router-dom";
import RootRoute from "./RootRoute";
import ROUTES from "./routes";
import OperationDashboardView from "./views/operation/OperationDashboardView";
import SelectOperationView from "./views/operation/SelectOperationView";

const router = createBrowserRouter([
  {
    path: ROUTES._ROOT,
    element: <RootRoute />,
    children: [
      { path: ROUTES.OPERATION._ROOT, element: <SelectOperationView /> },
      {
        path: ROUTES.OPERATION.BY_ID._PATH,
        element: <OperationDashboardView />,
      },
    ],
  },
]);

export default router;
