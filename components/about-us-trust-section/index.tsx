import { Container, Grid, Typography } from "@mui/material";

export default function TrustSection() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={5}>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
            Яагаад биднийг сонгох вэ?
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
