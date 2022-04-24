import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import AboutUsZurag from "../../assets/about/about-gallery-2.jpg";

export default function AboutUsSection() {
  return (
    <Container sx={{ my: 10 }}>
      <Grid container alignItems="center">
        <Grid item xs={5} sx={{ pr: 3 }}>
          <Typography
            variant="h6"
            color="#127F06"
            fontWeight="bold"
            fontSize="15px"
          >
            <AddIcon sx={{ fontSize: "15px", mr: 1 }} />
            БИДНИЙ ТУХАЙ
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ my: 2 }}>
            Бид хүмүүсийн гайхалтай төслийг бодит болгоход тусладаг
          </Typography>
          <Typography variant="caption">
            Sedut perspiciatis unde omnis iste natus voluptatem accusan tium
            dolore dantiumy totam rem apeam, eaque ipsa quaventore veritatis
            quasi architecto beatae.
          </Typography>
          <Grid container alignItems="top" sx={{ mt: 3 }}>
            <Grid item xs={1} textAlign="center">
              <DoneIcon
                sx={{
                  color: "white",
                  fontSize: "30px",
                  backgroundColor: "#127F06",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </Grid>
            <Grid item xs={11} sx={{ pl: 2 }}>
              <Typography variant="h5" fontWeight="bold" fontSize="22px">
                Хамгийн өндөр амжилтын хувь
              </Typography>
              <Typography variant="caption">
                Quis autem vel eum iure reprehenderit quin
              </Typography>
            </Grid>
          </Grid>

          <Grid container alignItems="top" sx={{ mt: 3 }}>
            <Grid item xs={1} textAlign="center">
              <DoneIcon
                sx={{
                  color: "white",
                  fontSize: "30px",
                  backgroundColor: "#127F06",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </Grid>
            <Grid item xs={11} sx={{ pl: 2 }}>
              <Typography variant="h5" fontWeight="bold" fontSize="22px">
                Crowdfunding ашиглан хөрөнгө босгох
              </Typography>
              <Typography variant="caption">
                Quis autem vel eum iure reprehenderit quin
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="top" sx={{ mt: 3 }}>
            <Grid item xs={1} textAlign="center">
              <DoneIcon
                sx={{
                  color: "white",
                  fontSize: "30px",
                  backgroundColor: "#127F06",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </Grid>
            <Grid item xs={11} sx={{ pl: 2 }}>
              <Typography variant="h5" fontWeight="bold" fontSize="22px">
                Мянга мянган төслүүд
              </Typography>
              <Typography variant="caption">
                Quis autem vel eum iure reprehenderit quin
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7} sx={{ pl: 5 }}>
          <Image src={AboutUsZurag} className="rounded-corner" />
        </Grid>
      </Grid>
    </Container>
  );
}
