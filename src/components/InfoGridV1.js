import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ButtonRounded from './ButtonRounded';
import{ motion } from "framer-motion";

const styles = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
}

const imgRadius = {
    zIndex: 0,
    width: '100%',
    height: '100%'
}

const moveText = {
    display: "block", 
    marginTop: -270,
    color: '#ffffff95',
    padding: 10
}

const showContent = {
        position: 'absolute',
        top: 0,
        left: 0,
         Zindex: 1
}

const stackImages = {
    position: 'absolute'
}



export default function InfoGridV1() {

    const [hoverText, setHoverText] = React.useState(false)
    return(

<div style={styles}>
    
    <Grid justifyContent='center' spacing={0} container>
        
        {/* card-1 */}
        <Grid
        onMouseEnter={() => setHoverText(true)}
        onMouseLeave={() => setHoverText(false)}
        item xs={12} sm={4}>
            
                <img style={imgRadius} src={'/assets/images/grid-1.png'} width='100%' />
            <Typography  
            sx={{ lineHeight: 1,fontSize: { xs: 62,sm: 82}}}>
            <span style={moveText} className='grate'>
            MOVE YOUR BODY TO BE STRONG
            <ButtonRounded
            cta='Book your class' />
            </span>
            </Typography>
            
        </Grid>

        {/* card-2 */}
        <Grid 
        item xs={12} sm={4}>
            <img style={imgRadius} src={'/assets/images/grid-2.png'} width='100%' />
            <Typography  
            sx={{ 
            lineHeight: 1, 
            fontSize: {
            lg: 82,
            md: 62,
            sm: 62,
            xs: 62
            }}}>
            <span style={moveText} className='grate'>
            WELLNESS WITH YOUR IN MIND.
            <ButtonRounded
            cta='Book your class' />
            </span>
            
            </Typography>
        </Grid>

        {/* card-3 */}
        <Grid 
        item xs={12} sm={4}>
            <img style={imgRadius} src={'/assets/images/grid-3.png'} width='100%' />
            <Typography  
            sx={{ 
            lineHeight: 1,
            fontSize: {
            lg: 82,
            md: 62,
            sm: 62,
            xs: 62
            }}}>
            <span style={moveText} className='grate'>
            EAT RAW. EAT BETTER.
            <ButtonRounded
            cta='Book your class' />
            </span>
            
            </Typography>
            
        </Grid>
    </Grid>
     
    
 </div>

    );
}