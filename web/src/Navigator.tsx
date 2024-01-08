import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PolicyRoundedIcon from "@mui/icons-material/PolicyRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import { Box, List, Option, Select, Typography } from "@mui/joy";
import NavigationButton from "./NavigationButton";

const Navigator = () => (
  <Box sx={{ width: 1 }}>
    <Select
      color="primary"
      placeholder="Choose one…"
      size="md"
      variant="outlined"
      sx={{ mt: 1, mb: 2 }}
    >
      <Option value={1}>Mega Op</Option>
      <Option value={2}>Nice Op</Option>
    </Select>
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
