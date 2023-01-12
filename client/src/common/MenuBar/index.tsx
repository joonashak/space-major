import { AppBar, Toolbar, Typography } from "@mui/material";
import MainMenu from "./MainMenu";

const MenuBar = () => (
  <AppBar position="static">
    <Toolbar>
      <MainMenu />
      <Typography variant="h6">Moi</Typography>
    </Toolbar>
  </AppBar>
);

export default MenuBar;
