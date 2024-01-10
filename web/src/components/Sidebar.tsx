import { Box } from "@mui/joy";
import Navigator from "./navigator/Navigator";

const Sidebar = () => (
  <Box
    sx={(theme) => ({
      display: "none",
      height: "100vh",
      width: "240px",
      gap: 2,
      p: 1,
      mb: 2,
      boxShadow: "sm",
      bgcolor: theme.palette.neutral[50],
      [theme.breakpoints.up("lg")]: { display: "flex" },
    })}
  >
    <Navigator />
  </Box>
);

export default Sidebar;
