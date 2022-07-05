import React from 'react'
import { Box } from '@mui/material'
import Chip from '@mui/material/Chip';


const ChipComponent = ({ txt, icon, variant }) => {
  return (
    <Box 
    sx={{ mb: 2, color: 'black'}}>
            <Chip color="default" 
            icon={icon} 
            label={<span style={{ fontSize: 16 }} className='candace'>{txt}</span>} 
            variant={variant} />
    </Box>
  )
}

export default ChipComponent