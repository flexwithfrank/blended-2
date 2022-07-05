import React from 'react'
import Grid from '@mui/material/Grid';
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
  
        </Grid>

        <Grid item xs={12} sm={4}>
            <img style={styles} src={src} width='100%' alt='hair-flip' />
            
        </Grid>


    </Grid>
  )
}

export default GiantTextRow