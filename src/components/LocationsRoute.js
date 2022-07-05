import React from 'react'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material';
import ButtonRounded from './ButtonRounded';
import Icons from './Icons';
import NetworkWifi3BarTwoToneIcon from '@mui/icons-material/NetworkWifi3BarTwoTone';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ChipComponent from './Chip';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import Map from './Map';

const styles = {
  margin: 50,
  backgroundColor: '#2c2d30'
}

const img = {
  borderRadius: 25
}


const LocationsRoute = () => {
  return (
        <div style={styles}>

          {/* left side information //////////////// */}

        <Grid alignItems='center' direction='row' sx={{ borderRadius: 10, p: 6, backgroundColor: '#f0f0f6' }} container>

            <Grid item xs={12} sm={5}>
            
            <ChipComponent
            txt='QUEEN ANNE'
            variant='filled'
            icon={<ShoppingBagTwoToneIcon />} />

             <Typography sx={{ mb: 2, lineHeight: 1, fontSize: {xs: 18, sm: 42 }}}>
                <span className='machina'>Your space to refuel.</span>
            </Typography>

            <Typography sx={{ mb: 2, fontSize: {xs: 18, sm: 22}}}>
                <span className='machina'>Wether your looking for a quick bite or for a space to WFH, Blended has got you covered.</span>
            </Typography>
          
            <Icons
            txt1='FREE-WIFI'
            txt2='ONLINE ORDERING'
            txt3='PET-FRIENDLY'
            ico1={<NetworkWifi3BarTwoToneIcon />}
            ico2={<PhoneIphoneTwoToneIcon />}
            ico3={<PetsOutlinedIcon />} 
            />
            <ButtonRounded 
            cta="Order Now — fuel up →"
            bg='black'
            clr='white' />


            </Grid>

             {/* right side google maps //////////////// */}

            <Grid item xs={12} sm={7}>
              <Map />
            </Grid>
        </Grid>
        </div>


  )
}

export default LocationsRoute