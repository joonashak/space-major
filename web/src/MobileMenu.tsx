import { Box, Drawer, DrawerProps } from "@mui/joy";
import Navigator from "./Navigator";

const MobileMenu = (props: DrawerProps) => {
  return (
    <Drawer anchor="top" {...props}>
      <Box sx={{ m: 1 }}>
        <Navigator />
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
