import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import ButtonRounded from './ButtonRounded';
import ButtonOutlineV2 from './ButtonOutlineV2';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import GiantText from './GiantText';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';



const handleClick = () => {
    window.location.href = 'https://www.eatblended.com/';
}
const pointer = {
    cursor: 'pointer'
}

const RewardsPlatform = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(() => {
        console.log("use effect hook, inView = ",  inView)
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 3, bounce: 0.2}
            });
            
        }
        if(!inView){
            animation.start({
                x: '100vw'
            })
        }

    }, [inView]);

    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked)
    }
  return (
    <div style={{ backgroundColor: checked ? '#f0f0f6' : '#2c2d30'}}>
        <GiantText
        txt='GET REWARDS.'
        clr='#35373a'
        align='left' />
    
    <Grid
        style={{ backgroundColor: checked ? '#f0f0f6' : '#2c2d30'}}
        justifyContent='center' 
        alignItems='center'
        align='center'
        container >
            <FormGroup>
                <FormControlLabel control={<Switch icon={<WbSunnyOutlinedIcon />} 
                checkedIcon={<Brightness4Icon/>} label="Label" onChange={handleChange} />} />
            </FormGroup>
        <Grid 
        sx={{ 
            backgroundColor: checked ? '#f0f0f6' : '#35373a',
            borderRadius: 10,
            m: 1,
            p: 5 }}
        item xs={12} sm={5}>
            <Typography 
            sx={{
            maxWidth: 600,
            color: 'white',
            lineHeight: 1, 
            fontSize: {xs: 32, sm: 54}}}>
                <span
                style={{ color: checked ? '#35373a' : '#fff'}} 
                className='machina'>Download the app. Get rewards.</span>
            </Typography>

            <Typography sx={{ color: 'white', maxWidth: 500, mb: 2, fontSize: {lg: 22,md: 22,sm: 22,xs: 18}}}>
                <span 
                style={{ color: checked ? '#35373a' : '#fff'}}
                className='machina'>Get the rewards app on the app store and never stop earning</span>
            </Typography>

            <Stack 
                justifyContent='center' 
                alignItems='center' spacing={2} direction='row'>
            <img style={pointer} onClick={handleClick} src={'/assets/images/app-store.svg'} width='40%' alt='apple-store-logo' />
            <img style={pointer} onClick={handleClick} src={'/assets/images/play.svg'} width='40%' alt='apple-store-logo' />
            </Stack>

        </Grid>

        <Grid ref={ref} item
        xs={12} sm={6}>
            <motion.div 
                animate={animation}
                 style={{overflowX: 'hidden'}}>
                <img src={'/assets/images/phone-dark-6.png'} 
                width='100%' height='100%' />
            </motion.div>
        </Grid>
    </Grid>
    </div>
  )
}

export default RewardsPlatform