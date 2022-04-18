import Image from 'next/image'
import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import SeedLogoWhite from '../../assets/logo/seed_logo_white.svg'

interface IContactWidgetCard {
    title: string,
    children: any,
    icon: 'phone' | 'email' | 'location'
}

function ContactWidgetCard(props: IContactWidgetCard) {
    const { title, children, icon } = props

    function renderIcon() {
        switch(icon) {
            case 'phone':
                return <LocalPhoneIcon sx={{ backgroundColor: '#127f06', color: 'white',  fontSize: 32, p: 1, borderRadius: 15 }} />
            case 'email':
                return <EmailIcon sx={{ backgroundColor: '#127f06', color: 'white',  fontSize: 32, p: 1, borderRadius: 15 }} />
            case 'location':
                return <LocationOnIcon sx={{ backgroundColor: '#127f06', color: 'white',  fontSize: 32, p: 1, borderRadius: 15 }} />
            default:
                return ''
        }
    }

    return (
        <Grid item xs={4}>
            <Grid container alignItems='top'>
                <Grid item xs={3}>
                    {renderIcon()}
                </Grid>
                <Grid item xs={9}>
                    <Typography variant='h6' sx={{ display: 'inline-block', color: '#999' }}>
                        {title}
                    </Typography>
                    <Typography variant='caption' sx={{ display: 'inline-block', color: 'white' }}>
                        {children}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default function SeedFooter() {
    return (
        <AppBar position="static" color='default' sx={{ backgroundColor: '#001d23', py: 7 }}>
            <Container>
                <Grid container alignItems='center'>
                    <Grid item xs={3} sx={{ textAlign: 'center' }}>
                        <Image src={SeedLogoWhite} alt='Seed Logo Black' width='170px' height='30px' /><br/>
                        <Typography variant='caption' color='white'>
                            © 2022 Seed.mn. Бүх эрх хуулиар хамгаалагдсан
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'center' }}>
                        <Link href='/terms-and-conditions'>
                            <a>
                                <Typography variant='body1' color='white' sx={{ mb: 2 }}>
                                    Үйлчилгээний нөхцөл
                                </Typography>        
                            </a>
                        </Link>
                        <Link href='/terms-and-conditions'>
                            <a>
                                <Typography variant='body1' color='white'>
                                    Бидэнтэй холбогдох
                                </Typography>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container>
                            <ContactWidgetCard title='Утасны дугаар' icon='phone'>
                                +976-8888-8888
                            </ContactWidgetCard>
                            <ContactWidgetCard title='И-мэйл хаяг' icon='email'>
                                support@seed.mn
                            </ContactWidgetCard>
                            <ContactWidgetCard title='Байршил' icon='location'>
                                Улаанбаатар, Хан-уул дүүрэг, 11-р хороо
                            </ContactWidgetCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    )
}