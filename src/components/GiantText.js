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
              lineHeight:{xs: "120px", sm: "280px"},
              letterSpacing: -2,
            color: clr,
            fontSize: {xs: 166, sm: 288}}}>
                <span className='grate'>{txt}</span>
    </Typography>
    </Stack>
  );
}
