import { Box } from "@mui/joy";
import Button from "@mui/joy/Button";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Button variant="solid">Hello world</Button>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
