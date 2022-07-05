import React from 'react'
import { Container } from '@mui/material';
import { Typography } from '@mui/material';



const FrequentlyAskedQuestions = () => {
  return (
    <div>
        <Container sx={{mt: 10, mb: 10}} maxWidth='md'>
          <Typography fontSize={24}>
            <span style={{color: 'white'}} className='machina'>Frequently asked things.</span>
          </Typography>
          
        </Container>
        
    </div>
  )
}

export default FrequentlyAskedQuestions