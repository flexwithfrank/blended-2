import React from 'react';  
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Container } from '@mui/material'
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import ButtonMain from './ButtonLarge';

const gridStyle = {
    position: 'relative'
}

const bgImage = {
    backgroundImage: "url('/assets/images/ride-45-g-scale (1).png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 600,
    position: 'relative',
    zIndex: 1,
    borderRadius: 10
}

const bgImageTwo = {
    backgroundImage: "url('/assets/images/shred-grayscale.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 600,
    position: 'relative',
    zIndex: 1,
    borderRadius: 10
}

const bgImageThree = {
    backgroundImage: "url('/assets/images/strength-grayscale.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 600,
    position: 'relative',
    zIndex: 1,
    borderRadius: 10
}
const bgImageFour = {
    backgroundImage: "url('/assets/images/superfood-grayscale.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 600,
    position: 'relative',
    zIndex: 1,
    borderRadius: 10
}

const bgImageFive = {
    backgroundImage: "url('/assets/images/wellness-grayscale.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 600,
    position: 'relative',
    zIndex: 1,
    borderRadius: 10
}

const bgImageSix = {
    backgroundImage: "url('/assets/images/cryo-grayscale.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 600,
    position: 'relative',
    zIndex: 1,
    borderRadius: 10
}

const textTop = {
    position: 'relative',
    zIndex: 3
}

const WhatWeOfferGrid = () => {

const [classImageOne, setClassImageOne] = useState(false);
const [classImageTwo, setClassImageTwo] = useState(false);
const [classImageThree, setClassImageThree] = useState(false);
const [classImageFour, setClassImageFour] = useState(false);
const [classImageFive, setClassImageFive] = useState(false);
const [classImageSix, setClassImageSix] = useState(false)

  return (
    <div style={gridStyle}>
        <Container disableGutters='true' maxWidth='xl'>
            <Grid justifyContent='center' container>

                <Grid m={1}  justifyContent='left' alignItems='center'
                onMouseEnter={() => setClassImageOne(true)}
                onMouseLeave={() => setClassImageOne(false)}
                style={bgImage} item container xs={12} sm={5.8}>   
                    {/* image overlay */}

   
                <motion.div 
                className="overlay-classes" 
                whileInView={{ opacity: [0, .25, .50, .75, 1]}}
                initial={{ opacity: 0 }}
                transition={{ delay: .50, ease: "easeInOut", duration: 1 }}>
                </motion.div>

                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 58, sm: 82}}}>
                    <span className='frank-bold'>RIDE45<span className='machina' style={{fontSize: 18}}>©</span></span>
                    <div style={{fontSize: 22}} className='machina'>45-min all out spin</div>
                    </Typography>
                        <Typography
                        p={2}
                        color='white'
                        align='left' 
                        sx={{ fontSize: {xs: 18, sm: 18}}}>
                        <span className='machina'>Heart pumpin', sweat dripping indoor spin with inspiring lights and
                        motivational instructors ready to give you the best RIDE45 of your life.</span>
                        </Typography>
                        {/* button */}
                        
                        <motion.div 
                            whileInView={{ opacity: 1, y: 0}}
                            initial={{ opacity: 0, y: 60}}
                            transition={{ delay: .35, duration: .50}}>
                            <Stack p={2} alignItems="flex-start" justifyContent="flex-start" direction="column">
                            <ButtonMain cta="Sign up" />
                            </Stack>
                        </motion.div>
   
                </Box>
                </Grid>

                {/* grid 2 //////////////////////////////////// */}

                <Grid m={1} justifyContent='left' alignItems='center'
                onMouseEnter={() => setClassImageTwo(true)}
                onMouseLeave={() => setClassImageTwo(false)}
                style={bgImageTwo} item container xs={12} sm={5.8}>   
                    {/* image overlay */}
                <motion.div 
                    style={{opacity: classImageTwo ? '1' : ''}}
                    className="overlay-classes-two" 
                    whileInView={{ opacity: [0, .25, .50, .75, 1]}}
                    initial={{ opacity: 0 }}
                    transition={{ delay: .50, ease: "easeInOut", duration: 1 }}>
                </motion.div>
                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 58, sm: 82}}}>
                    <span className='frank-bold'>INFRARED<span className='machina' style={{fontSize: 18}}>©</span></span>
                    <div style={{fontSize: 22}} className='machina'>Formats to get you sweating</div>
                    </Typography>
                        <Typography
                        p={2}
                        color='white'
                        align='left' 
                        sx={{ fontSize: {xs: 18, sm: 18}}}>
                        <span className='machina'>Infrared heated yoga studio with various formats to get you sweating.
                        Find your zen with yoga flow and get your heart pumping with Shred. Time to turn up the heat.</span>
                        </Typography>
                    <motion.div 
                            whileInView={{ opacity: 1, y: 0}}
                            initial={{ opacity: 0, y: 60}}
                            transition={{ delay: .35, duration: .50}}>
                            <Stack p={2} alignItems="flex-start" justifyContent="flex-start" direction="column">
                            <ButtonMain cta="Sign up" />
                            </Stack>
                    </motion.div>   
                </Box>
                </Grid>

                {/* grid 3 //////////////////////////////////// */}
            <Grid m={1} justifyContent='left' alignItems='center'
                onMouseEnter={() => setClassImageThree(true)}
                onMouseLeave={() => setClassImageThree(false)}
                style={bgImageThree} item container xs={12} sm={5.8}>   
                    {/* image overlay */}
                <motion.div 
                    style={{opacity: classImageThree ? '1' : ''}}
                    className="overlay-classes-three" 
                    whileInView={{ opacity: [0, .25, .50, .75, 1]}}
                    initial={{ opacity: 0 }}
                    transition={{ delay: .50, ease: "easeInOut", duration: 1 }}>
                </motion.div>
                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 58, sm: 82}}}>
                    <span className='frank-bold'>STRENGTH<span className='machina' style={{fontSize: 28}}>&reg;</span></span>
                    <div style={{fontSize: 22}} className='machina'>Lift heavy sh*t, feel strong.</div>
                    </Typography>
                        <Typography
                        p={2}
                        color='white'
                        align='left' 
                        sx={{ fontSize: {xs: 18, sm: 18}}}>
                        <span className='machina'>Strength &amp; conditioning formats to get your heart rate up and help build
                        strong muscle by lifting heavy sh*t. Every workout is different so you'll never get bored.</span>
                        </Typography>
                    <motion.div 
                            whileInView={{ opacity: 1, y: 0}}
                            initial={{ opacity: 0, y: 60}}
                            transition={{ delay: .35, duration: .50}}>
                            <Stack p={2} alignItems="flex-start" justifyContent="flex-start" direction="column">
                            <ButtonMain cta="Sign up" />
                            </Stack>
                    </motion.div>  
                </Box>
                </Grid>
                {/* grid 4 //////////////////////////////////// */}
                <Grid m={1} justifyContent='left' alignItems='center'
                onMouseEnter={() => setClassImageFour(true)}
                onMouseLeave={() => setClassImageFour(false)}
                style={bgImageFour} item container xs={12} sm={5.8}>   
                    {/* image overlay */}
                <motion.div 
                    style={{opacity: classImageFour ? '1' : ''}}
                    className="overlay-classes-four" 
                    whileInView={{ opacity: [0, .25, .50, .75, 1]}}
                    initial={{ opacity: 0 }}
                    transition={{ delay: .50, ease: "easeInOut", duration: 1 }}>
                </motion.div>
                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 58, sm: 82}}}>
                    <span className='frank-bold'>CAFE &amp; BAR<span className='machina' style={{fontSize: 28}}>™️</span></span>
                    <div style={{fontSize: 22}} className='machina'>Plant based bites to fuel your day.</div>
                    </Typography>
                        <Typography
                        p={2}
                        color='white'
                        align='left' 
                        sx={{ fontSize: {xs: 18, sm: 18}}}>
                        <span className='machina'>We serve delicious smoothies, juice, and salads with a healthy twist. All natural 
                        ingredients to fuel your workout or to SLAY your day. Come work from home or just chill.</span>
                        </Typography>
                    <motion.div 
                            whileInView={{ opacity: 1, y: 0}}
                            initial={{ opacity: 0, y: 60}}
                            transition={{ delay: .35, duration: .50}}>
                            <Stack p={2} alignItems="flex-start" justifyContent="flex-start" direction="column">
                            <ButtonMain cta="Sign up" />
                            </Stack>
                    </motion.div>   
                </Box>
                </Grid>

                {/* grid 5 //////////////////////////////////// */}

                 <Grid m={1} justifyContent='left' alignItems='center'
                onMouseEnter={() => setClassImageFive(true)}
                onMouseLeave={() => setClassImageFive(false)}
                style={bgImageFive} item container xs={12} sm={5.8}>   
                    {/* image overlay */}
                <motion.div 
                    style={{opacity: classImageFive ? '1' : ''}}
                    className="overlay-classes-five" 
                    whileInView={{ opacity: [0, .25, .50, .75, 1]}}
                    initial={{ opacity: 0 }}
                    transition={{ delay: .50, ease: "easeInOut", duration: 1 }}>
                </motion.div>
                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 58, sm: 82}}}>
                    <span className='frank-bold'>WELLNESS<span className='machina' style={{fontSize: 28}}>&reg;</span></span>
                    <div style={{fontSize: 22}} className='machina'>Science-backed recovery to heal you.</div>
                    </Typography>
                    <Stack className='machina' direction='row' spacing={2}>
                    
                    </Stack>
                        
                        <Typography
                        p={2}
                        color='white'
                        align='left' 
                        sx={{ fontSize: {xs: 18, sm: 18}}}>
                        <span className='machina'>Our wellness center offer cryotherapy, massage, vitamin IV drips, compression therapy and much
                        more to help keep you on your a game and speed up your recovery.</span>
                        </Typography>
                    <motion.div 
                            whileInView={{ opacity: 1, y: 0}}
                            initial={{ opacity: 0, y: 60}}
                            transition={{ delay: .35, duration: .50}}>
                            <Stack p={2} alignItems="flex-start" justifyContent="flex-start" direction="column">
                            <ButtonMain cta="Sign up" />
                            </Stack>
                    </motion.div>   
                </Box>
                </Grid>

                 {/* grid 6 //////////////////////////////////// */}
                 <Grid m={1} justifyContent='left' alignItems='center'
                onMouseEnter={() => setClassImageSix(true)}
                onMouseLeave={() => setClassImageSix(false)}
                style={bgImageSix} item container xs={12} sm={5.8}>   
                    {/* image overlay */}
                <motion.div 
                    style={{opacity: classImageSix ? '1' : ''}}
                    className="overlay-classes-six" 
                    whileInView={{ opacity: [0, .25, .50, .75, 1]}}
                    initial={{ opacity: 0 }}
                    transition={{ delay: .50, ease: "easeInOut", duration: 1 }}>
                </motion.div>
                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 58, sm: 82}}}>
                    <span className='frank-bold'>MEDSPA<span className='machina' style={{fontSize: 28}}>&reg;</span></span>
                    <div style={{fontSize: 22}} className='machina'>Professional services to create true wellness</div>
                    </Typography>
                        <Typography
                        p={2}
                        color='white'
                        align='left' 
                        sx={{ fontSize: {xs: 18, sm: 18}}}>
                        <span className='machina'>Take wellness up a notch with private massages and IV Vitamin Infusions to 
                        quick charge your wellness with proven health &amp; wellness vitamin cocktails</span>
                        </Typography>
                    <motion.div 
                            whileInView={{ opacity: 1, y: 0}}
                            initial={{ opacity: 0, y: 60}}
                            transition={{ delay: .35, duration: .50}}>
                            <Stack p={2} alignItems="flex-start" justifyContent="flex-start" direction="column">
                            <ButtonMain cta="Sign up" />
                            </Stack>
                    </motion.div>   
                </Box>
                </Grid>

                 

            </Grid>
        </Container>



    </div>
  )
}

export default WhatWeOfferGrid