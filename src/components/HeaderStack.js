import React from 'react';
import { Container, Typography, Stack, Box, Grid } from '@mui/material';
import ButtonMain from './ButtonLarge';
import { motion } from 'framer-motion';

const HeaderStack = () => {
  return (
    <>
    <Container sx={{ mb: 10 }} disableGutters="true" maxWidth="lg">

      <motion.div 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: 60}}
        transition={{ duration: .50}}>
     <Typography
            lineHeight={{xs: 1}}
            pb={4}
            color='white'
            align='center' 
            sx={{ fontSize: {xs: 38, sm: 62}}}>
            <span className='frank-bold'>BE HUMAN. BE KIND.</span> 
    </Typography>
     </motion.div>

          <motion.div 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: 60}}
        transition={{ delay: .15, duration: .50}}>
          <Box sx={{ textAlign: "center", maxWidth: 550, margin: '0 auto' }}>
         <Typography mb={5} px={3} color="white" align='center' fontSize={{xs:22}}>
          <span className='machina'>Signature workouts to get you sweating and get you to your goals quick</span>
          </Typography>
          </Box>
          </motion.div>

        <motion.div 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: 60}}
        transition={{ delay: .35, duration: .50}}>
        <Stack alignItems="center" justifyContent="center" direction="column">
        <ButtonMain cta="Sign up now" />
        </Stack>
        </motion.div>

    </Container>
    </>
  )
}

export default HeaderStack