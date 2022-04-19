import {Card, Container} from '@mui/material'
import { Typography } from '@mui/material'
import card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import AddIcon from '@mui/icons-material/Add'
import PeopleIcon from '@mui/icons-material/People'
import HandShakeIcon from '@mui/icons-material/Handshake'
import MoreTimeIcon from '@mui/icons-material/MoreTime'

export default function TrustSection() {
  return(
   <div style={{ backgroundColor: '#edf9f3', padding: '40px 0'}}>
     <Container sx={{ textAlign: 'center'}}>
       <Typography
         variant="h6"
         color="127f06"
         fontWeight="bold"
         fontSize="15px"
      >
        <AddIcon sx={{ fontSize: '15px', mr: 1}}/>
        Бидний Тухай
        </Typography>
        <Typography variant='h4' fontWeight={"bold"} sx={{ my: 2}}>
          Яагаад Бидний Сонгох Вэ?
        </Typography>

        <Card
        sx={{
            mt: 4,
            p: 2,
            boxShadow: '0px 0px 0px rgba (255,255,255,0)',
            textAlign: 'center',
            width: '34%',
            display: 'incline-block',
            minHeight: '520px',
          }}
        />              
        <CardContent>
          <PeopleIcon sx={{ fontSize: '70px', color: '#127f06'}} />
          <Typography variant="h5" sx={{ my: 2, fontWeight: 'bold'}}>
            Олон нийтийн хүч
          </Typography>
        </CardContent>
     </Container>
   </div> 
  )
}