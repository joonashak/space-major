import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { FindOperationDocument } from "../generated/graphql-operations";

const useOperationQuery = () => {
  const { opName } = useParams();

  return useQuery(FindOperationDocument, {
    variables: { shortName: opName || "" },
  });
};

export default useOperationQuery;
