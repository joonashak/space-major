import {
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
} from "@mui/joy";
import { ReactNode } from "react";
import { useMatch } from "react-router-dom";

type NavigationButtonProps = {
  icon: ReactNode;
  title: string;
  path?: string;
};

const NavigationButton = ({ icon, title, path }: NavigationButtonProps) => {
  const pathMatch = useMatch(path || "");
  const selected = !!(path && pathMatch);

  return (
    <ListItem>
      <ListItemButton
        selected={selected}
        sx={(theme) => ({
          borderRadius: 6,
          "&:hover": { bgcolor: theme.palette.neutral[50] },
        })}
      >
        {icon}
        <ListItemContent>
          <Typography level="title-sm" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );
};

export default NavigationButton;
