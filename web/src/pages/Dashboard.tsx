import { useQuery } from "@apollo/client";
import { Box } from "@mui/joy";
import { useParams } from "react-router-dom";
import { FindOperationDocument } from "../generated/graphql-operations";

const Dashboard = () => {
  const { opName } = useParams();
  const { data } = useQuery(FindOperationDocument, {
    variables: { shortName: opName || "" },
  });

  if (!data) {
    return null;
  }

  return <Box>Dashboard: {data.findOperation.name}</Box>;
};

export default Dashboard;
