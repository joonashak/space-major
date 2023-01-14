import { Container, Typography } from "@mui/material";
import LoginButton from "../auth/LoginButton";

const PublicView = () => (
  <Container>
    <Typography>Welcome to Space Major!</Typography>
    <LoginButton />
  </Container>
);

export default PublicView;
