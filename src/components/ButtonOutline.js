import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

const css = `
.button-80 {
  background: #fff;
  backface-visibility: hidden;
  border-radius: 5rem;
  border-style: solid;
  border-width: .125rem;
  box-sizing: border-box;
  color: #212121;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,Helvetica,sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -.01em;
  line-height: 1.3;
  padding: .875rem 1.125rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-80:not(:disabled):hover {
  transform: scale(1.05);
}

.button-80:not(:disabled):hover:active {
  transform: scale(1.05) translateY(.125rem);
}

.button-80:focus {
  outline: 0 solid transparent;
}

.button-80:focus:before {
  content: "";
  left: calc(-1*.375rem);
  pointer-events: none;
  position: absolute;
  top: calc(-1*.375rem);
  transition: border-radius;
  user-select: none;
}

.button-80:focus:not(:focus-visible) {
  outline: 0 solid transparent;
}

.button-80:focus:not(:focus-visible):before {
  border-width: 0;
}

.button-80:not(:disabled):active {
  transform: translateY(.125rem);
}`;

export default function ButtonOutline({ cta }) {
    return(
        <div>
            <style type="text/css">{css}</style>
            <ButtonUnstyled className='button-80'>{cta}</ButtonUnstyled>
        </div>
        
    );
}