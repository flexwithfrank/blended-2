import React from 'react'
import { Stack, Typography, Grid } from '@mui/material';
import GiantText from './GiantText';

const styles = {
    borderRadius: 10,
}


const GiantTextRow = ({ align1, align2, dir, src, txt1, txt2}) => {
  return (
    <Grid spacing={2} direction={dir} container>

        <Grid direction='column' xs={12} sm={8} item>
        
        <GiantText
        txt={txt1}
        clr='#35373a'
        align={align1} />

        <GiantText
        txt={txt2}
        clr='#f0f0f6'
        align={align2} />

        <Typography
            align="left"
            sx={{
              lineHeight:{xs: "88px", sm: "220px"},
              letterSpacing: -2,
            color: "white",
            fontSize: {xs: 102, sm: 288}}}>
                <span className='frank-bold tester'></span>
        </Typography>


    
  
        </Grid>

        <Grid item xs={12} sm={4}>
            <img style={styles} src={src} width='100%' alt='person-working-out' />
        </Grid>


    </Grid>
  )
}

export default GiantTextRow