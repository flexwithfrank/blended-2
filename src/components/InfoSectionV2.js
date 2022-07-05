import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material';
import ButtonOutlineV2 from './ButtonOutlineV2';
import ButtonOutlineV3 from './ButtonOutlineV3';
import ButtonRounded from './ButtonRounded';
import ButtonOutline from './ButtonOutline';



const InfoSectionV2 = ({ src, size, bg, clr, txt1, txt2, txt3, cta }) => {
  return (
   
        <Grid 
        alignItems='center'
        justifyContent='center'
        sx={{ p: 5,
        backgroundColor: bg,
        color: clr }} container>

          {/* left side image */}
            <Grid item container
            xs={12} sm={6}>
                <Box><img src={src} width={size} alt="person" /></Box>
            </Grid>

            {/* right side texts */}

            <Grid item container
            xs={12} sm={6}>
              
            <Typography sx={{ fontSize: {lg: 18,md: 18,sm: 18,xs: 18}}}>
                <span className='candace'>{txt1}</span>
            </Typography>

            <Typography 
            align='left'
            sx={{
            mb: 3,
            lineHeight: 1, 
            fontSize: {lg: 142,md: 42,sm: 32,xs: 32}}}>
                <span className='grate'>{txt2}</span>
            </Typography>

            <Typography sx={{ mb: 3, fontSize: {lg: 22,md: 22,sm: 22,xs: 18}}}>
                <span className='machina'>{txt3}</span>
            </Typography>

            <ButtonRounded 
            cta={cta} />
            </Grid>

        </Grid>
 
  )
}

export default InfoSectionV2