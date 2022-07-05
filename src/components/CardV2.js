import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import { AvatarBadge } from './AvatarBadge';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { Stack } from '@mui/material';
import ButtonRounded from './ButtonRounded';

const img = {
    borderRadius: 10
}
const CardV2 = ({ src, src1, src2, title, title1, title2, pri, pri1, pri2, cta }) => {
  return (

    <Grid 
    sx={{ p: 5 }}
    spacing={5} container>

        {/* item 1 /////////////// */}
        <Grid
        sx={{ color: 'white' }}
        item xs={12} sm={4}>
        <Stack direction='column' spacing={1}>
            {/* product image */}
            <img style={img} src={src} width='100%' alt='some-random-image' />
            {/* title */}
            <Typography 
                sx={{
                fontSize: {lg: 24,md: 24,sm: 22,xs: 22}}}>
                    <span className='machina'>{title}</span>
            </Typography>
            {/* price */}
            <Typography 
            sx={{ 
            fontSize: {lg: 28,md: 18,sm: 18,xs: 18}}}>
                <span className='machina'>{pri}</span>
            </Typography>
            {/* button */}
            <ButtonRounded cta={cta} />
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
            <Typography 
                sx={{
                fontSize: {lg: 24,md: 24,sm: 22,xs: 22}}}>
                    <span className='machina'>{title1}</span>
            </Typography>
            {/* price */}
            <Typography 
            sx={{ 
            fontSize: {lg: 28,md: 18,sm: 18,xs: 18}}}>
                <span className='machina'>{pri1}</span>
            </Typography>
            {/* button */}
            <ButtonRounded cta={cta} />
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
            <Typography 
                sx={{
                fontSize: {lg: 24,md: 24,sm: 22,xs: 22}}}>
                    <span className='machina'>{title2}</span>
            </Typography>
            {/* price */}
            <Typography 
            sx={{ 
            fontSize: {lg: 28,md: 18,sm: 18,xs: 18}}}>
                <span className='machina'>{pri2}</span>
            </Typography>
            {/* button */}
            <ButtonRounded cta={cta} />
        </Stack>
        </Grid>



    </Grid>



  )
}

export default CardV2