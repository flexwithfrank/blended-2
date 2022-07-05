import React from 'react';
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



export default function CardV1({ clr, bg, src, src1, txt1, txt2, txt3, txt4, txt5, txt6, tag1, tag2, tag3, tag4 }) {
    return(
         <Grid
         justifyContent='center'
          container>

            <Grid sx={{ p: 5, borderRadius: 5, m: 3, backgroundColor: bg }} 
            item xs={12} sm={5}>

            <AvatarBadge
            tag1={tag1}
            tag2={tag2}
            src={src} />

            <Typography 
            sx={{
            color: clr,
            mb: 3,
            lineHeight: 1, 
            fontSize: {lg: 48,md: 42,sm: 32,xs: 32}}}>
                <span className='machina'>{txt1}</span>
            </Typography>

            <Typography 
            sx={{
            mb: 3,
            color: clr,
            lineHeight: 1, 
            fontSize: {lg: 28,md: 42,sm: 32,xs: 32}}}>
                <span className='machina'>{txt2}</span>
            </Typography>
            
            <Stack 
                direction="row"
                justifyContent="flex-end"
                alignItems='center'
                spacing={1}>
            <VerifiedOutlinedIcon sx={{ color: clr}} />    
            <Typography align='right' sx={{ color: clr, mb: 1, fontSize: {lg: 22,md: 22,sm: 22,xs: 18}}}>
                <span className='machina'>{txt3}</span>
            </Typography>
            </Stack>
            

            <Rating icon={<FavoriteIcon sx={{ color: '#ff6d75'}} fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    style={{ float: 'right'}} name="size-medium" defaultValue={5} />

            </Grid>

            {/* card right side */}

            <Grid sx={{ p: 5, borderRadius: 5, m: 3, backgroundColor: bg }} 
            item xs={12} sm={5}>
            <AvatarBadge
            tag1={tag3}
            tag2={tag4}
            src={src1} />

            <Typography 
            sx={{
            color: clr,
            mb: 3,
            lineHeight: 1, 
            fontSize: {lg: 48,md: 42,sm: 32,xs: 32}}}>
                <span className='machina'>{txt4}</span>
            </Typography>

            <Typography 
            sx={{
            mb: 3,
            color: clr,
            lineHeight: 1, 
            fontSize: {lg: 28,md: 42,sm: 32,xs: 32}}}>
                <span className='machina'>{txt5}</span>
            </Typography>

            <Stack 
                direction="row"
                justifyContent="flex-end"
                alignItems='center'
                spacing={1}>
            <VerifiedOutlinedIcon sx={{ color: clr}} />    
            <Typography align='right' sx={{ color: clr, mb: 1, fontSize: {lg: 22,md: 22,sm: 22,xs: 18}}}>
                <span className='machina'>{txt6}</span>
            </Typography>
            </Stack>

            <Rating icon={<FavoriteIcon sx={{ color: '#ff6d75'}} fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    style={{ float: 'right'}} name="size-medium" defaultValue={5} />

            </Grid>

        </Grid>
    )
}