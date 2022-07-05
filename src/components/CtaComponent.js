import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonOutlineV2 from './ButtonOutlineV2';


const styles = {
    padding: 25,
    backgroundColor: '#e1f1fd'
}

export default function CtaComponent({ head, des, des2, src, bg, size, clr, cta }) {
    return(
        <div style={styles}>
            <Grid
            sx={{ 
            alignItems: 'center',
            justifyContent: 'center',
            p: 3,
            borderRadius: 15,
            backgroundColor: bg,
            color: clr }} 
            container>
            {/* left side */}
            <Grid container
            alignItems='center' 
            item xs={12} sm={6}>
            <Typography 
            align='left' 
            sx={{
            lineHeight: {
            lg: '4rem',
            md: '2.5rem',
            sm: '2.5rem',
            xs: '2.5rem'
            },
            fontSize: {
            lg: 72,
            md: 42,
            sm: 42,
            xs: 42
            }}}>
        <span className='cotter'>{head}</span> 
            </Typography>
            <Typography 
            align='left' 
            sx={{
            p: 1,
            lineHeight: '2rem',
            fontSize: {
            lg: 28,
            md: 22,
            sm: 22,
            xs: 22
            }}}>
                <span className='cotter-med'>{des}</span>
            </Typography>

                <ButtonOutlineV2
                cta={cta} />

            </Grid>
            {/* right side */}
            <Grid container
            justifyContent='center'
            alignItems='center' 
            item xs={12} sm={6}>
                <img width={size} src={src} />
                <Typography 
            align='center' 
            sx={{
            lineHeight: '2rem',
            fontSize: {
            lg: 18,
            md: 18,
            sm: 18,
            xs: 18
            }}}>
                <span className='cotter-med'>{des2}</span>
            </Typography>
            </Grid>
            </Grid>
        </div>
    );
}