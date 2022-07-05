import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Box } from '@mui/material';

const css = `
.button-18 {
  align-items: center;
  background-color: #fff;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  font-family: "machina" !important;
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
}

.button-18:hover,
.button-18:focus { 
  background-color: #16437E;
  color: #ffffff;
}

.button-18:active {
  background: #09223b;
  color: rgb(255, 255, 255, .7);
}

.button-18:disabled { 
  cursor: not-allowed;
  background: rgba(0, 0, 0, .08);
  color: rgba(0, 0, 0, .3);
}
`
export default function ButtonRounded({ cta, bg, clr }) {
    return(
        <div>
             <style type="text/css">{css}</style>
             <Box 
             px={{ xs: 0, sm: 0}}
             py={{ xs: 1, sm: 0}}>
            <ButtonUnstyled style={{ backgroundColor: bg, color: clr }} className='button-18'>
                {cta}
            </ButtonUnstyled>
            </Box>
        </div>
    );
}