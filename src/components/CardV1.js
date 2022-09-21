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

            <Grid sx={{ p: 5, borderRadius: 5, m: 2, backgroundColor: bg }} 
            item xs={12} sm={5}>

            <AvatarBadge
            tag1={tag1}
            tag2={tag2}
            src={src} />

            {/* header text */}

            <Typography 
            sx={{
            color: clr,
            mb: 3,
            lineHeight: 1, 
            fontSize: {xs: 28, sm: 32}}}>
                <span className='frank-bold'>{txt1}</span>
            </Typography>

            {/* description text */}

            <Typography 
            sx={{
            mb: 3,
            color: clr,
            lineHeight: 1, 
            fontSize: {xs: 18, sm: 22}}}>
                <span className='konstanz'>{txt2}</span>
            </Typography>
            
            {/* verification tag bottom */}
            <Stack 
                direction="row"
                justifyContent="flex-end"
                alignItems='center'
                spacing={1}>
            <VerifiedOutlinedIcon sx={{ color: clr}} />    
            <Typography align='right' fontSize={{xs: 14, sm: 20}} sx={{ color: clr, mb: 1}}>
                <span className='machina'>{txt3}</span>
            </Typography>
            </Stack>
            

            <Rating icon={<FavoriteIcon sx={{ color: '#ff6d75'}} fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    style={{ float: 'right'}} name="size-medium" defaultValue={5} />

            </Grid>

            {/* card right side */}

            <Grid sx={{ p: 5, borderRadius: 5, m: 2, backgroundColor: bg }} 
            item xs={12} sm={5}>
            <AvatarBadge
            tag1={tag3}
            tag2={tag4}
            src={src1} />
                {/* heading text */}
            <Typography 
            sx={{
            color: clr,
            mb: 3,
            lineHeight: 1, 
            fontSize: {xs: 28, sm: 32}}}>
                <span className='frank-bold'>{txt4}</span>
            </Typography>
                {/* description text */}
            <Typography 
            sx={{
            mb: 3,
            color: clr,
            lineHeight: 1, 
            fontSize: {xs: 18, sm: 22}}}>
                <span className='konstanz'>{txt5}</span>
            </Typography>
                {/* verification tag */}
            <Stack 
                direction="row"
                justifyContent="flex-end"
                alignItems='center'
                spacing={1}>
            <VerifiedOutlinedIcon sx={{ color: clr}} />    
            <Typography align='right' fontSize={{xs: 14, sm: 20}} sx={{ color: clr, mb: 1}}>
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