import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes";

const MainMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const goTo=(path:string)=>()=>{
    navigate(path)
    onClose()
  }

  return (
    <>
      <IconButton onClick={onClick}>
        <MenuIcon />
      </IconButton>

      <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
        <MenuItem onClick={goTo(ROUTES.OPERATION._PATH)}>Select Operation</MenuItem>
        <MenuItem onClick={goTo(ROUTES.OPERATION.BY_ID._PATH)}>Dummy Operation</MenuItem>
      </Menu>
    </>
  );
};

export default MainMenu;
