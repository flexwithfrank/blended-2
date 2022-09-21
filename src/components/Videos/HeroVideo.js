import React from 'react';
import ReactPlayer from 'react-player'
import { Container, Typography, Box  } from '@mui/material';

const HeroVideo = () => {
  return (
    <Container maxWidth="xl" disableGutters="true">
            <ReactPlayer
            playing="true"
            loop="true"
            volume="0"
            muted="true"
            url='https://studio3fit.com/wp-content/uploads/2022/01/s3-ad-2022.mp4'
            width="100%"
            height="auto"
            playsinline="true" />

            <Box sx={{ 
              mt: {xs: "-200px", sm: "-600px" },
              ml: {xs: 5, sm: 35 }
              }} className='move-text'>
                <Typography
                align="center"
                sx={{ 
                lineHeight:{xs: "120px", sm: "220px"},
                color: "white",
                fontSize: {xs: 32, sm: 88}}}>
                <span className='frank-bold'>EXPERIENCE THE HYPE.</span>
                </Typography>
            </Box>
    </Container>
  )
}

export default HeroVideo