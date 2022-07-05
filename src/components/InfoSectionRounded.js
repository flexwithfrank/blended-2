import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';


const styles={
    overflow: 'hidden',
    borderRadius: 25
}

const section = {
    height: '100%'
}


export const InfoSectionRounded = ({ src, txt, chip, icon, dir }) => {

    const [image, setImage] = React.useState(false)

     const handleMouseEnter = e => {
    e.target.style.backgroundImage = "url('/assets/images/holding-drinks.jpg')";
  }
  const handleMouseLeave = e => {
    e.target.style.backgroundImage = "url('/assets/images/holding-drinks.jpg')";
  }
  return (
    <Grid
    justifyContent='center'
     direction={dir} style={section} container>
        {/* card one */}
        <Grid 
        sx={{ 
        backgroundColor: '#f0f0f6',
        color: '#b9babe',
        borderRadius: 10,
        p: 5,
        m: 2 }} xs={12} sm={4} item >
            <Box sx={{ mb: 2, color: 'black'}}>
                <Chip color="default" 
                icon={icon} 
                label={<span style={{ fontSize: 16 }} className='candace'>{chip}</span>} 
                variant="filled" />
            </Box>

            <Typography 
            sx={{
            maxWidth: 400,
            lineHeight: 1, 
            fontSize: {xs: 52, sm: 62 }}}>
                <span className='machina'>{txt}</span>
            </Typography>
            
        </Grid>
        {/* card two */}

        <Grid
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
        m: 2,
        borderRadius: 10
        }} xs={12} sm={7} item>
        <img style={styles} src={src} 
        width='100%' 
        alt='card-image' />
        </Grid>
    </Grid>
  )
}
