import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import MenuBar from "./common/MenuBar";
import PublicView from "./views/PublicView";

const loggedIn = true;

const RootRoute = () =>
  loggedIn ? (
    <Container disableGutters maxWidth={false}>
      <MenuBar />
      <Outlet />
    </Container>
  ) : (
    <PublicView />
  );

export default RootRoute;
