import Menu from "@mui/icons-material/Menu";
import { IconButton, Sheet, Typography } from "@mui/joy";

const Header = () => (
  <Sheet
    sx={(theme) => ({
      display: "flex",
      width: "100vw",
      gap: 2,
      p: 1,
      boxShadow: "sm",
      [theme.breakpoints.up("lg")]: { display: "none" },
    })}
  >
    <IconButton variant="outlined">
      <Menu />
    </IconButton>
    <Typography level="h3">Space Major</Typography>
  </Sheet>
);

export default Header;
