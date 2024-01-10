import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { Button } from "@mui/joy";

const LoginButton = () => (
  <Button
    startDecorator={<LoginRoundedIcon />}
    fullWidth
    variant="soft"
    sx={(theme) => ({
      borderRadius: 6,
      "&:hover": { bgcolor: theme.palette.neutral[50] },
    })}
    onClick={() => (window.location.href = import.meta.env.VITE_SSO_LOGIN_URL)}
  >
    Login with EVE SSO
  </Button>
);

export default LoginButton;
