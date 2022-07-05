import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ButtonOutlineV2 from './ButtonOutlineV2';
import ButtonRounded from './ButtonRounded';
import ChipComponent from './Chip';
import { Container } from '@mui/material';



const styles = {
    overflow: 'hidden',
    textAlign: 'left',
    width: '100vw'
}

const imgStyle = {
    overflow: 'hidden',
    height: '110%',
    width: '110%',
    objectFit: 'cover'
    }



export default function InfoSectionV1({ cta, bg, txt, txt2, txt3, vis, src1, src2 }) {
    return(
            <div style={styles} >
            <Container disableGutters='true' maxWidth='xl'>
            <Grid container item 
            sx={{backgroundColor: bg}}
            justifyContent='center'
            alignItems='center'>
                {/* left side */}
            <Grid
            sx={{ p: 5}}
            align="left"
            item xs={12} sm={6}>
            
            <ChipComponent
            txt={txt}
            variant='filled' />
           

            <Typography 
            sx={{
            mb: 3,
            lineHeight: 1, 
            fontSize: {xs: 52, sm: 72}}}>
                <span className='machina'>{txt2}</span>
            </Typography>

            <Typography sx={{ mb: 4, fontSize: {lg: 22,md: 22,sm: 22,xs: 18}}}>
                <span className='machina'>{txt3}</span>
            </Typography>
                <Box>
                <ButtonRounded 
            cta={cta}
            bg='black'
            clr='white' />
                </Box>
            <img style={{ display: vis }} width='250px' src={src1} />
            </Grid>

            {/* right side */}
            
            <Grid item xs={12} sm={6}>
            <Container>
                <Box>
                    <img style={imgStyle} 
                    src={src2} 
                    alt='human-image' />
                </Box >
                
            </Container>

            </Grid>
            </Grid>
            </Container>
            </div>

    );
}