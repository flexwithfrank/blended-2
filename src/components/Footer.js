import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import { Container } from '@mui/material'
import { Link } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Stack } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailForm from './EmailForm'



const Footer = () => {
  return (

  <footer>
    <Box
    sx={{ backgroundColor: '#35373a'}} 
    px={{ xs: 0, sm: 0 }}
    py={{ xs: 1, sm: 0 }}
    color="white">
        <Container disableGutters='true' maxWidth='xl'>
            <Grid p={5} container>
                {/* footer column one ////////// */}
                <Grid item xs={12} sm={4}>
                    <Box sx={{ fontSize: 84}} className='grate'>
                        <Link href="/" color="inherit">
                        RITUAL.
                        </Link>
                    </Box>
                    <Box my={5} className='machina'>
                        <Link href="/" color="inherit">
                        Find your ritual.
                        </Link>
                    </Box>
                    <Box my={5}>
                        <Link href="/" color="inherit">
                        <Stack spacing={3} direction='row'>
                            <InstagramIcon sx={{ width: 30, height: 30 }} />
                            <FacebookIcon sx={{ width: 30, height: 30 }} />
                            <YouTubeIcon sx={{ width: 30, height: 30 }} />
                            <LinkedInIcon sx={{ width: 30, height: 30 }} />
                            <TwitterIcon sx={{ width: 30, height: 30 }} />
                        </Stack>
                        </Link>
                    </Box>
                    <Box my={5} className='machina'>
                        <Link href="/" color="inherit">
                        hello@ritual.com
                        </Link>
                    </Box>
                </Grid>
                {/* footer column two ////////// */}
                <Grid item xs={12} sm={4}>
                    <Box mt={5} className='machina'>
                        <Link href="/" color="inherit">
                        Home.
                        </Link>
                    </Box>
                    <Box my={2} className='machina'>
                        <Link href="/" color="inherit">
                        Book Workout.
                        </Link>
                    </Box>
                    <Box my={2} className='machina'>
                        <Link href="/" color="inherit">
                        Get directions.
                        </Link>
                    </Box>
                    <Box my={2} className='machina'>
                        <Link href="/" color="inherit">
                        Send us a message.
                        </Link>
                    </Box>
                    <Box my={3} className='machina'> 
                        We're on a mission to change the way you create wellness
                        through a holisitic Ritual.
                    </Box>
                   <EmailForm />
                </Grid>

                {/* footer column three ////////// */}
               

                {/* footer column four ////////// */}

                <Grid item xs={12} sm={4}>
                    <Box mt={5} className='machina'>
                        <Link href="/" color="inherit">
                            <Box pb={2}>Download the app &reg; get rewards.</Box>
                        <div><img src={'/assets/images/badge-1.png'} width='50%' alt='app-store-icon' /></div>
                        <div><img src={'/assets/images/badge-2.png'} width='50%' alt='app-store-icon' /></div>
                        </Link>
                    </Box>
                </Grid>


            </Grid>

            <Box sx={{backgroundColor: '#2c2d30', width: '100%'}} className='machina' textAlign='center' pt={{xs: 2, sm: 2}} pb={{ xs: 2, sm: 2}}>
                Ritual Studios &reg; {new Date().getFullYear()}. All rights reserved.
            </Box>

        </Container>
    </Box>
    </footer>
    
  );
}

export default Footer