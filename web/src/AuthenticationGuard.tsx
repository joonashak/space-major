import { useQuery } from "@apollo/client";
import { Outlet } from "react-router-dom";
import { WhoamiDocument } from "./generated/graphql-operations";

const AuthenticationGuard = () => {
  const { error } = useQuery(WhoamiDocument);

  if (error) {
    throw new Error();
  }

  return <Outlet />;
};

export default AuthenticationGuard;
