import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import PublicView from "./views/PublicView";

const loggedIn = true;

const RootRoute = () =>
  loggedIn ? (
    <Container>
      <Outlet />
    </Container>
  ) : (
    <PublicView />
  );

export default RootRoute;
