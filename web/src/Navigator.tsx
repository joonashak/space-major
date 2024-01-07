import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
} from "@mui/joy";

const Navigator = () => (
  <Box>
    <List>
      <ListItem>
        <ListItemButton>
          <HomeRoundedIcon />
          <ListItemContent>
            <Typography level="title-sm">Home</Typography>
          </ListItemContent>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>Asd</ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>Asd</ListItemButton>
      </ListItem>
    </List>
  </Box>
);

export default Navigator;
