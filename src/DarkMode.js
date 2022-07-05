import React from 'react'
import Switch from '@mui/material/Switch';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { SafetyCheckRounded } from '@mui/icons-material';


const DarkMode = () => {
    // const [color, setColor] = React.useState(false)
      const [checked, setChecked] = React.useState(false);


    const handleChange = (event) => {
      setChecked(event.target.checked)
    }

  return (
    <div style={{ backgroundColor: checked ? '#2c2d30' : '#ffffff' }}>
        <Switch checked={checked} checkedIcon={<DarkModeOutlinedIcon />}  onChange={handleChange} />
        <h1 style={{ color: checked ? '#ffffff' : '#000000' }}>Hello welcome to my site</h1>
    </div>
  )
}

export default DarkMode