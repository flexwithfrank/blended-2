import React from 'react';
import ReactPlayer from 'react-player'
import { Container  } from '@mui/material';

const HeroVideo = () => {
  return (
    <Container maxWidth="xl" disableGutters="true">
            <ReactPlayer
            playing="true"
            loop="true"
            volume="0"
            mute="true"
            url='https://studio3fit.com/wp-content/uploads/2022/01/s3-ad-2022.mp4'
            width="100%"
            height="auto"
            playsinline="true" />
    </Container>
  )
}

export default HeroVideo