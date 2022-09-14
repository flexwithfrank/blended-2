import React from 'react'
import { Typography, Stack, Grid, Container, Box } from '@mui/material';
import ButtonMain from './ButtonLarge';


const img = {
    borderRadius: 10
}
const CardV2 = ({ src, src1, src2, title, title1, title2, pri, pri1, pri2, cta }) => {
  return (
        <Container sx={{mb: 10}} maxWidth="xl" disableGutters="true">
    <Grid 
    sx={{ p: 2 }}
    spacing={5} container>

        {/* item 1 /////////////// */}
        <Grid
        sx={{ color: 'white' }}
        item xs={12} sm={4}>
        <Stack direction='column' spacing={1}>
            {/* product image */}
            <img style={img} src={src} width='100%' alt='some-random-image' />
            {/* title */}
            <Typography pt={2} 
                sx={{
                fontSize: {xs:22,sm:24}}}>
                    <span className='machina'>{title}</span>
            </Typography>
            {/* price */}
            <Typography 
            sx={{ 
            fontSize: {xs:18,lg:22}}}>
                <span className='machina'>{pri}</span>
            </Typography>
            {/* button */}
            <Box pt={2}>
            <ButtonMain cta={cta} />
            </Box>
        </Stack>
        </Grid>

        {/* item 2  ////////////////////*/}

        <Grid
        sx={{ color: 'white' }}
        item xs={12} sm={4}>
        <Stack direction='column' spacing={1}>
            {/* product image */}
            <img style={img} src={src1} width='100%' alt='some-random-image' />
            {/* title */}
            <Typography pt={2}
                sx={{
                fontSize: {xs:22,sm:24}}}>
                    <span className='machina'>{title1}</span>
            </Typography>
            {/* price */}
            <Typography 
            sx={{ 
            fontSize: {xs:18,lg:22}}}>
                <span className='machina'>{pri1}</span>
            </Typography>
            {/* button */}
            <Box pt={2}>
            <ButtonMain cta={cta} />
            </Box>
        </Stack>
        </Grid>

        {/*  item 3 /////////////////////// */}

        <Grid
        sx={{ color: 'white' }}
        item xs={12} sm={4}>
        <Stack direction='column' spacing={1}>
            {/* product image */}
            <img style={img} src={src2} width='100%' alt='some-random-image' />
            {/* title */}
            <Typography pt={2}
                sx={{
                fontSize: {xs:22,sm:24}}}>
                    <span className='machina'>{title2}</span>
            </Typography>
            {/* price */}
            <Typography 
            sx={{ 
            fontSize: {xs:18,lg:22}}}>
                <span className='machina'>{pri2}</span>
            </Typography>
            {/* button */}
            <Box pt={2}>
             <ButtonMain cta={cta} />
             </Box>
        </Stack>
        </Grid>
    </Grid>
     </Container>

  )
}

export default CardV2