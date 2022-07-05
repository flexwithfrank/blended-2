import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

const css = `
.button-74 {
  background-color: #fff;
  margin-top: 15px;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #000000 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-74:hover {
  background-color: #fff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}
`

export default function ButtonOutlineV2({ cta }) {
    return(
        <div>
             <style type="text/css">{css}</style>
            <ButtonUnstyled className='button-74'>
                {cta}
            </ButtonUnstyled>
        </div>

    );
}