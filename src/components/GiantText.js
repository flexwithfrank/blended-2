import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';

export default function GiantText({ txt, clr, align }) {
  return (
    <Stack>
      <Typography
            align={align}
            sx={{
              lineHeight: '220px',
              letterSpacing: -2,
            color: clr,
            fontSize: {lg: 288,md: 88,sm: 88,xs: 66}}}>
                <span className='grate'>{txt}</span>
    </Typography>
    </Stack>
  );
}
