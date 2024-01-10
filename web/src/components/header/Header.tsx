import Menu from "@mui/icons-material/Menu";
import { IconButton, Sheet, Typography } from "@mui/joy";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  return (
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
      <MobileMenu open={open} onClose={toggleOpen} />
      <IconButton variant="outlined" onClick={toggleOpen}>
        <Menu />
      </IconButton>
      <Typography level="h3">Space Major</Typography>
    </Sheet>
  );
};

export default Header;
