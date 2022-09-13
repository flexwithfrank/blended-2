import React from 'react'
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function GiantText({ txt, clr, align }) {
  return (
    <div style={{maxWidth: "100%"}}>
      <Typography
            align={align}
            sx={{
              lineHeight:{xs: "120px", sm: "220px"},
              letterSpacing: -2,
            color: clr,
            fontSize: {xs: 126, sm: 288}}}>
                <span className='grate'>{txt}</span>
    </Typography>
    </div>
  );
}
