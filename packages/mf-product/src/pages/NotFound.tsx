import { Button, Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="button" sx={{ mb: 2 }}>
        Opps! Page not found!
      </Typography>
      <Button variant="contained">Back to Homepage</Button>
    </Container>
  );
};

export default NotFound;
