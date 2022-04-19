import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Image from "next/image";
import AboutUsZurag from "../../assets/about/about-gallery-2.jpg";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";

export default function AboutUsSection() {
  return (
    <Container sx={{ my: 10 }}>
      <Grid container alignItems={"center"}>
        <Grid item xs={5} sx={{ pr: 3 }}>
          <Typography
            variant="h6"
            color="green"
            fontWeight={"bold"}
            fontSize="15"
          >
            <AddIcon sx={{ fontSize: "15px", mr: 1 }} />
            Бидний тухай
          </Typography>
          <Typography variant="h5" fontWeight={"bold"} sx={{ my: 2 }}>
            Бид Хүмүүсийн Гайхалтай Санааг Хөрсөн Дээр Буун Бодит Болгоход
            Тусладаг
          </Typography>
          <Typography variant="body2" sx={{ py: 1 }}>
            Уран бүтээлийн гайхалтай санаа, бүтээх хүсэл эрмэлзэл байгаа ч гэсэн
            хэрхэн яаж хөрсөн дээр буулгах, хаанаас яаж эхлэх аргаа олохгүй
            байна уу? Seed.mn ашиглан төслийн санаагаа олон нийтэд танилцуулан
            олон нийтээс санхүүжилт авах боломжийг олгосоноор бид уран
            бүтээлчдэд эхлэлийн цэгээ тавихад нь туслах бөгөөд уран бүтээлийг
            бүтээлцэх ажилд хувь нэмрээ оруулах хүсэлтэй хүмүүст бүтээлцэх ажлын
            нэг хэсэг болох боломжийг олгох юм.
          </Typography>
          <Grid container alignItems={"top"} sx={{ mt: 3 }}>
            <Grid item xs={1} textAlign="center">
              <DoneIcon>
                {{
                  color: "white",
                  fontSize: "30px",
                  backgroundCOlor: "green",
                  broderRadius: "50",
                  padding: "5px",
                }}
              </DoneIcon>
              <Grid container alignItems={"top"} sx={{ mt: 3 }}>
                <Grid item xs={1} textAlign="center">
                  <DoneIcon>
                    {{
                      color: "white",
                      fontSize: "30px",
                      backgroundCOlor: "green",
                      broderRadius: "50",
                      padding: "5px",
                    }}
                  </DoneIcon>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Image src={AboutUsZurag} alt="About us zurag" />
        </Grid>
      </Grid>
    </Container>
  );
}
