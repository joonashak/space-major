import { createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes";
import PublicView from "./views/PublicView";

const router = createBrowserRouter([
  { path: ROUTES._ROOT, element: <PublicView /> },
]);

export default router;
