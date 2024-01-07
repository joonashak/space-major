import { Box } from "@mui/joy";
import Button from "@mui/joy/Button";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Button variant="solid">Hello world</Button>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
