import React from 'react';  
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Container } from '@mui/material'
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { Stack } from '@mui/material';


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

    const [state, setstate] = useState(false);

  const changeClass = () => {
    const scrollValue = document.documentElement.scrollTop;

    if(scrollValue > 400)
    {
      setstate(true);
    }
    else{
      setstate(false);
    }
      
  }
  window.addEventListener('scroll', changeClass);

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


                    <div style={{opacity: classImageOne ? '1' : ''}} 
                    className="overlay-classes">
                    </div>

                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 62, sm: 82}}}>
                    <span className='grate'>RIDE45 ©</span>
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
                    <Box sx={{fontColor: '#fff'}} px={2}>
                        <Button endIcon={<ArrowForwardIcon />}>
                        <span className='machina'>Sign up</span>
                        </Button>
                    </Box>   
                </Box>
                </Grid>

                {/* grid 2 //////////////////////////////////// */}

                <Grid m={1} justifyContent='left' alignItems='center'
                onMouseEnter={() => setClassImageTwo(true)}
                onMouseLeave={() => setClassImageTwo(false)}
                style={bgImageTwo} item container xs={12} sm={5.8}>   
                    {/* image overlay */}
                    <div style={{opacity: classImageTwo ? '1' : ''}} 
                    className='overlay-classes-two'>
                    </div>
                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 62, sm: 82}}}>
                    <span className='grate'>INFRARED STUDIO ©</span>
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
                    <Box sx={{fontColor: '#fff'}} px={2}>
                        <Button endIcon={<ArrowForwardIcon />}>
                        <span className='machina'>Sign up</span>
                        </Button>
                    </Box>   
                </Box>
                </Grid>

                {/* grid 3 //////////////////////////////////// */}
            <Grid m={1} justifyContent='left' alignItems='center'
                onMouseEnter={() => setClassImageThree(true)}
                onMouseLeave={() => setClassImageThree(false)}
                style={bgImageThree} item container xs={12} sm={5.8}>   
                    {/* image overlay */}
                    <div style={{opacity: classImageThree ? '1' : ''}} 
                    className='overlay-classes-three'>
                    </div>
                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 62, sm: 82}}}>
                    <span className='grate'>STRENGTH ENDURANCE &reg;</span>
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
                    <Box sx={{fontColor: '#fff'}} px={2}>
                        <Button endIcon={<ArrowForwardIcon />}>
                        <span className='machina'>Sign up</span>
                        </Button>
                    </Box>   
                </Box>
                </Grid>
                {/* grid 4 //////////////////////////////////// */}
                <Grid m={1} justifyContent='left' alignItems='center'
                onMouseEnter={() => setClassImageFour(true)}
                onMouseLeave={() => setClassImageFour(false)}
                style={bgImageFour} item container xs={12} sm={5.8}>   
                    {/* image overlay */}
                    <div style={{opacity: classImageFour ? '1' : ''}} 
                    className='overlay-classes-four'>
                    </div>
                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 62, sm: 82}}}>
                    <span className='grate'>SUPERFOOD CAFE &reg;</span>
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
                    <Box sx={{fontColor: '#fff'}} px={2}>
                        <Button endIcon={<ArrowForwardIcon />}>
                        <span className='machina'>Sign up</span>
                        </Button>
                    </Box>   
                </Box>
                </Grid>

                {/* grid 5 //////////////////////////////////// */}

                 <Grid m={1} justifyContent='left' alignItems='center'
                onMouseEnter={() => setClassImageFive(true)}
                onMouseLeave={() => setClassImageFive(false)}
                style={bgImageFive} item container xs={12} sm={5.8}>   
                    {/* image overlay */}
                    <div style={{opacity: classImageFive ? '1' : ''}} 
                    className='overlay-classes-five'>
                    </div>
                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 62, sm: 82}}}>
                    <span className='grate'>WELLNESS CENTER &reg;</span>
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
                    <Box sx={{fontColor: '#fff'}} px={2}>
                        <Button endIcon={<ArrowForwardIcon />}>
                        <span className='machina'>Sign up</span>
                        </Button>
                    </Box>   
                </Box>
                </Grid>

                 {/* grid 6 //////////////////////////////////// */}
                 <Grid m={1} justifyContent='left' alignItems='center'
                onMouseEnter={() => setClassImageSix(true)}
                onMouseLeave={() => setClassImageSix(false)}
                style={bgImageSix} item container xs={12} sm={5.8}>   
                    {/* image overlay */}
                    <div style={{opacity: classImageSix ? '1' : ''}} 
                    className='overlay-classes-six'>
                    </div>
                {/* text */}
                <Box style={textTop}>
                    <Typography
                    p={2}
                    color='white'
                    align='left' 
                    sx={{ mb: 2, fontSize: {xs: 62, sm: 82}}}>
                    <span className='grate'>HOLISTIC CARE &reg;</span>
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
                    <Box sx={{fontColor: '#fff'}} px={2}>
                        <Button endIcon={<ArrowForwardIcon />}>
                        <span className='machina'>Sign up</span>
                        </Button>
                    </Box>   
                </Box>
                </Grid>

                 

            </Grid>
        </Container>



    </div>
  )
}

export default WhatWeOfferGrid