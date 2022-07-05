import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@mui/material';

const marqueeVariants = {
  animate: {
    x: [0, -6000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 100,
        ease: "linear",
      },
    },
  },
};

const styles = {
  background: '#f0f0f6',
  border: 'solid 2px black',
  color: '#000',
  
}

const Marquee = () => {
  return (
    <div className='marquee machina'>
    <Box mb={2}>
    <motion.div
    className='track'
    variants={marqueeVariants}
    animate='animate'>
        <h1 style={styles}>Changing the way you view wellness by re-defining your RITUAL. Changing the way you view wellness by re-defining your RITUAL. Changing the way you view wellness by re-defining your RITUAL. Changing the way you view wellness by re-defining your RITUAL. Changing the way you view wellness by re-defining your RITUAL. Changing the way you view wellness by re-defining your RITUAL. Changing the way you view wellness by re-defining your RITUAL.</h1>
    </motion.div>
    </Box>
    </div>
  )
}

export default Marquee