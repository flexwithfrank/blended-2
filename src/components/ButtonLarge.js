import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Link } from '@mui/material';

const css = `
.button-27 {
  appearance: none;
  background-color: #000000;
  border: 2px solid #000000;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
}

.button-27:disabled {
  pointer-events: none;
}

.button-27:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-27:active {
  box-shadow: none;
  transform: translateY(0);
}`;



const ButtonMain = ({ cta }) => {
  return (
        <div>
        <style type="text/css">{css}</style>
            <Link href="https://studio3-schedule.vercel.app/" target="_blank" className='button-27'>{cta}</Link>
        </div>
  )
}

export default ButtonMain