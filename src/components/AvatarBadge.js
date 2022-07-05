import * as React from 'react';
import { Avatar } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import VerifiedIcon from '@mui/icons-material/Verified';

export const AvatarBadge = ({ src, alt, tag1, tag2 }) => {
  return (
    <>
    <Stack
    spacing={1}
    alignItems='center'
    justifyItems='center'
     direction='row'>
    <Avatar
        alt={alt}
        src={src}
        sx={{ border: 5, borderColor: 'white', mb: 3, width: 100, height: 100 }}/>
       
      <Typography align='left' sx={{ color: 'white', mb: 1, fontSize: {lg: 16,md: 18,sm: 18,xs: 18}}}>
                 <Stack direction='row' spacing={1}>
                  <div className='candace'>{tag1}</div>
                <VerifiedIcon sx={{ color: '#1ea1f1'}} />
                 </Stack>
                
                <div className='cotter-med'>{tag2}</div>

      </Typography>
    </Stack>
    </>
  )
}
