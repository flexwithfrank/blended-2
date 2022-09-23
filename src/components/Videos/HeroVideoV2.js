import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Typography, Stack, Container } from '@mui/material';
import { motion } from 'framer-motion';
import ButtonMain from '../ButtonLarge';

const stylesOne = {
    width: '100%',
    position: 'relative',
    objectFit: 'cover' 
}

const stylesTwo = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
}

const HeroVideoV2 = () => {


  return (
    <Container maxWidth="xl" disableGutters="true" sx={stylesOne}>

      <ReactPlayer
            playing="true"
            loop="true"
            volume="0"
            muted="true"
            url='https://studio3fit.com/wp-content/uploads/2022/01/s3-ad-2022.mp4'
            width="100%"
            height="100%"
            playsinline="true" />

      <div style={stylesTwo}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff">

          <motion.div 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: 60}}
        transition={{ duration: .50}}>

            <Typography variant='h3' component='h1'
                    lineHeight={{xs: 1}}
                    pb={4}
                    color='white'
                    align='center' 
                    sx={{ fontSize: {xs: 38, sm: 82}}}>
                    <span className='frank-bold'>BE HUMAN. BE KIND.</span> 
            </Typography>

     </motion.div>

            <motion.div 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: 60}}
            transition={{ delay: .15, duration: .50}}>

                <Stack alignItems="flex-start" justifyContent="flex-start" direction="column">
                <ButtonMain cta="Join the hype" />
                </Stack>

            </motion.div> 
        </Box>
      </div>
    </Container>
  );
};

export default HeroVideoV2;