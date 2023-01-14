import { useLazyQuery } from "@apollo/client";
import { StartSsoLoginDocument } from "../generated/graphqlOperations";

const useAuth = () => {
  const [startSsoLogin] = useLazyQuery(StartSsoLoginDocument, {
    onCompleted: ({ startSsoLogin }) => {
      console.log('asd');
      window.location.href = startSsoLogin.ssoLoginUrl;
    },
  });

  return { startSsoLogin };
};

export default useAuth;
