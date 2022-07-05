import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import GiantText from './GiantText';
import { motion } from "framer-motion"
import { Container } from '@mui/material';



const styles = {
    borderRadius: 10,
}

const WideImage = ({ src }) => {
  return (
    <Grid 
    spacing={2}
    alignItems='center'
    container>
        <Grid xs={4} sm={4} item>
        <Box>
          <GiantText
        txt='FIND YOUR OWN'
        clr='#35373a'
        align='right' />
        </Box>
        </Grid>
        
        <Grid 
        sx={{ p:1 }} xs={12} sm={8} item>
            <div><img style={styles} src={src} width='100%' alt='yup' /></div>
        </Grid>


    </Grid>
  )
}

export default WideImage