import { Box } from "@mui/joy";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { opName } = useParams();

  return <Box>Dashboard: {opName}</Box>;
};

export default Dashboard;
