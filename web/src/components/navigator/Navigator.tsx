import { useQuery } from "@apollo/client";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PolicyRoundedIcon from "@mui/icons-material/PolicyRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import { Box, Divider, List } from "@mui/joy";
import { WhoamiDocument } from "../../generated/graphql-operations";
import LoginButton from "./LoginButton";
import NavigationButton from "./NavigationButton";
import OperationSelect from "./OperationSelect";
import UserMenu from "./UserMenu";

const Navigator = () => {
  const { error } = useQuery(WhoamiDocument);
  const loggedIn = !error;

  return (
    <Box sx={{ width: 1, height: 1, display: "flex", flexDirection: "column" }}>
      <Box>
        <OperationSelect />
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
      <Box sx={{ mt: 1 }}>{loggedIn ? <UserMenu /> : <LoginButton />}</Box>
    </Box>
  );
};

export default Navigator;
