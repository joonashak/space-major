import { Drawer, DrawerProps } from "@mui/joy";
import Navigator from "./Navigator";

const MobileMenu = (props: DrawerProps) => {
  return (
    <Drawer anchor="top" {...props}>
      <Navigator />
    </Drawer>
  );
};

export default MobileMenu;
