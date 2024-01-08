import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PolicyRoundedIcon from "@mui/icons-material/PolicyRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import { Box, List, Typography } from "@mui/joy";
import NavigationButton from "./NavigationButton";

const Navigator = () => (
  <Box sx={{ width: 1 }}>
    <Typography>TODO: Op Selector</Typography>
    <List sx={{ gap: 1 }}>
      <NavigationButton
        icon={<SpaceDashboardRoundedIcon />}
        title="Dashboard"
        path="/"
      />
      <NavigationButton icon={<InfoRoundedIcon />} title="Information" />
      <NavigationButton icon={<PolicyRoundedIcon />} title="Intel" />
    </List>
    <Typography>TODO: Login Stuff</Typography>
  </Box>
);

export default Navigator;
