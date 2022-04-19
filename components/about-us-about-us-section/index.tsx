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
      <Grid container alignItems="center">
        <Grid item xs={5} sx={{ pr: 3 }}>
          <Typography
            variant="h6"
            color="green"
            fontWeight={"bold"}
            fontSize="15"
          >
            <AddIcon sx={{ fontSize: "15px", mr: 1 }} />
            Бидний Тухай
          </Typography>
          <Typography variant="h4" fontWeight={"bold"} sx={{ my: 2 }}>
            Бид хүмүүсийн гайхалтай төслийг хөрсөн дээр буун бодит болгоход
            тусладаг
          </Typography>
          <Typography variant="caption">
            Уран бүтээлийн гайхалтай санаа, бүтээх хүсэл эрмэлзэл байгаа ч гэсэн
            хэрхэн яаж хөрсөн дээр буулгах, хаанаас яаж эхлэх аргаа олохгүй
            байна уу? Seed.mn ашиглан төслийн санаагаа олон нийтэд танилцуулан
            олон нийтээс санхүүжилт авах боломжийг олгосоноор бид уран
            бүтээлчдэд эхлэлийн цэгээ тавихад нь туслах бөгөөд уран бүтээлийг
            бүтээлцэх ажилд хувь нэмрээ оруулах хүсэлтэй хүмүүст бүтээлцэх ажлын
            нэг хэсэг болох боломжийг олгох юм.
          </Typography>
          <Grid></Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
