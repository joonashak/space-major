import { Box } from "@mui/joy";
import useOperationQuery from "../hook/useOperationQuery";

const Dashboard = () => {
  const { data } = useOperationQuery();

  if (!data) {
    return null;
  }

  return <Box>Dashboard: {data.findOperation.name}</Box>;
};

export default Dashboard;
