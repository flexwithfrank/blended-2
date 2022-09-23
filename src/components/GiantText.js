import React from 'react'
import { Stack, Typography } from '@mui/material';

export default function GiantText({ txt, clr, align }) {
  return (
    <div style={{maxWidth: "100%"}}>
      <Typography
            align={align}
            sx={{
              lineHeight:{xs: "92px", sm: "220px"},
              letterSpacing: -2,
            color: clr,
            fontSize: {xs: 102, sm: 248}}}>
                <span className='frank-bold'>{txt}</span>
    </Typography>
    </div>
  );
}
