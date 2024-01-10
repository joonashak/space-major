import { useQuery } from "@apollo/client";
import { Avatar, Box, Card, CardContent, Link, Typography } from "@mui/joy";
import { WhoamiDocument } from "../../generated/graphql-operations";

const UserMenu = () => {
  const { data } = useQuery(WhoamiDocument);

  if (!data) {
    return null;
  }

  const {
    main: { eveId, name, corporation },
  } = data.whoami;

  return (
    <Box>
      <Card orientation="horizontal">
        <Avatar
          alt={name}
          size="lg"
          src={`https://images.evetech.net/characters/${eveId}/portrait?size=128`}
        />
        <CardContent>
          <Typography level="title-sm">
            <Link
              overlay
              underline="none"
              component="button"
              onClick={() => alert("Character Management")}
              sx={{ color: "text.primary" }}
            >
              {name}
            </Link>
          </Typography>
          <Typography level="body-sm">{corporation.name}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserMenu;
