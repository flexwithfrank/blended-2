import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import ButtonRounded from './ButtonRounded';
import ButtonOutlineV2 from './ButtonOutlineV2';


const css = `
 .hero {
  background-image: url('/assets/images/donuts (1).jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 35rem;
  overflow: hidden;
}
.dark{
  filter: brightness(50%);
}
  .hero-styles {
    alignItems: center;
    justifyContent: center;
    height: 100vh;
    width: 100vw;
}
.man{
  position: absolute;
  margin-right: auto;
  margin-left: auto;
}
`

export default function Hero( { head, cta }) {
  return (
    <div className='hero hero-styles'>
        <style type='text/css'>{css}</style>

        <Stack sx={{
          p: 3
        }} direction='column' spacing={1}>
          {/* header */}
          <Typography
        sx={{
            lineHeight: {
            lg: '8rem',
            md: '6rem',
            sm: '5rem',
            xs: '3rem'
            },
            fontSize: {
            lg: 142,
            md: 82,
            sm: 42,
            xs: 42
            }}}>
        <Box sx={{ maxWidth: 1200 }} >
          <span style={{ color: 'white'}} className='vaulto'>{head}</span>
        </Box>
        </Typography>
        
            {/* button */}
        <ButtonOutlineV2
        cta={cta} />

        </Stack>
        

    </div>
    
    
  );
}
