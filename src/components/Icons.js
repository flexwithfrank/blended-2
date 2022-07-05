import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
            

export default function Icons({ txt1, txt2, txt3, ico1, ico2, ico3 }) {
    return(
            <Stack sx={{ m: 3 }} justifyContent={'center'} direction="row" spacing={3}>
            <Stack alignItems={'center'} direction="column" spacing={1}>
            <span sx={{ width: 50, height: 50, color: '#ED4337' }}>{ico1}</span>
            <Box className='candace'>{txt1}</Box>
            </Stack>
            <Stack alignItems={'center'} direction="column" spacing={1}>
            <span sx={{ width: 50, height: 50 }}>{ico2}</span>
            <Box className='candace'>{txt2}</Box>
            </Stack>
            <Stack alignItems={'center'} direction="column" spacing={1}>
            <span sx={{ width: 50, height: 50 }}>{ico3}</span>
            <Box className='candace'>{txt3}</Box>
            </Stack>
            </Stack>

    );
}