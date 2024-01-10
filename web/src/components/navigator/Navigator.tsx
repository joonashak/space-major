import { useQuery } from "@apollo/client";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PolicyRoundedIcon from "@mui/icons-material/PolicyRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import { Box, Divider, List, Option, Select } from "@mui/joy";
import { WhoamiDocument } from "../../generated/graphql-operations";
import LoginButton from "./LoginButton";
import NavigationButton from "./NavigationButton";

const Navigator = () => {
  const { error } = useQuery(WhoamiDocument);
  const loggedIn = !error;

  return (
    <Box sx={{ width: 1, height: 1, display: "flex", flexDirection: "column" }}>
      <Box>
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
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <List sx={{ gap: 1 }}>
          <NavigationButton
            icon={<SpaceDashboardRoundedIcon />}
            title="Dashboard"
            path="/"
          />
          <NavigationButton icon={<InfoRoundedIcon />} title="Information" />
          <NavigationButton icon={<PolicyRoundedIcon />} title="Intel" />
        </List>
      </Box>
      <Divider />
      <Box sx={{ mt: 1 }}>
        <LoginButton />
      </Box>
    </Box>
  );
};

export default Navigator;
