import { Box } from "@mui/joy";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/header/Header";

const Layout = () => (
  <Box
    sx={(theme) => ({
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.up("lg")]: { flexDirection: "row" },
    })}
  >
    <Header />
    <Sidebar />
    <Box
      sx={(theme) => ({
        ml: 1,
        mr: 1,
        mt: 2,
        mb: 2,
        [theme.breakpoints.up("lg")]: {
          ml: 5,
          mr: 5,
          mt: 4,
          mb: 4,
        },
      })}
    >
      <Outlet />
    </Box>
  </Box>
);

export default Layout;
