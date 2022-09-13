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
  color: '#000',
  
}

const Marquee = () => {
  return (
    <div className='marquee grate'>
    <Box>
    <motion.div
    className='track'
    variants={marqueeVariants}
    animate='animate'>
        <h1 style={styles}>MORE BURPEES — MORE TAP BACKS — MORE SPRINTS — MORE SQUATS — MORE SWEAT — MORE LAUGHS — MORE HIGH FIVES — MORE CHALLENGES MORE BURPEES — MORE TAP BACKS — MORE SPRINTS — MORE SQUATS — MORE SWEAT — MORE LAUGHS — MORE HIGH FIVES — MORE CHALLENGES MORE BURPEES — MORE TAP BACKS — MORE SPRINTS — MORE SQUATS — MORE SWEAT — MORE LAUGHS — MORE HIGH FIVES — MORE CHALLENGES MORE BURPEES — MORE TAP BACKS — MORE SPRINTS — MORE SQUATS — MORE SWEAT — MORE LAUGHS — MORE HIGH FIVES — MORE CHALLENGES MORE BURPEES — MORE TAP BACKS — MORE SPRINTS — MORE SQUATS — MORE SWEAT — MORE LAUGHS — MORE HIGH FIVES — MORE CHALLENGES — </h1>
    </motion.div>
    </Box>
    </div>
  )
}

export default Marquee