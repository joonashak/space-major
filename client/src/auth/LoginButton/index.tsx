import { Button, ButtonProps } from "@mui/material";
import useAuth from "../useAuth";
import ssoLogo from "./eve_sso_login_button_dark.png";

const LoginButton = (props: ButtonProps) => {
  const { startSsoLogin } = useAuth();
  const onClick = () => startSsoLogin();

  return (
    <Button onClick={onClick} {...props}>
      <img src={ssoLogo} alt="Log In With EVE Online" />
    </Button>
  );
};

export default LoginButton;
