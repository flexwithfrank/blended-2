import './App.css';
import React from 'react';
import CtaComponent from './components/CtaComponent';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import InfoSectionV1 from './components/InfoSectionV1';
import InfoSectionV2 from './components/InfoSectionV2';
import RewardsPlatform from './components/RewardsPlatform';
import ButtonRounded from './components/ButtonRounded';
import { InfoSectionRounded } from './components/InfoSectionRounded';
import WideImage from './components/WideImage';
import CardV1 from './components/CardV1';
import CardV2 from './components/CardV2';
import Location from './components/Location';
import { Box } from '@mui/material';
import GiantText from './components/GiantText';
import GiantTextRow from './components/GiantTextRow';
import InfoGridV1 from './components/InfoGridV1';
import Footer from './components/Footer';
import { motion } from "framer-motion"
import Marquee from './components/Marquee';
import ModalSchedule from './components/ModalSchedule'
import WhatWeOfferGrid from './components/WhatWeOfferGrid';
import { Typography } from '@mui/material';
import { HeroImageBackground } from './components/HeroV2.tsx';
import { Faq } from './components/Faq.tsx';
import { Container, Stack } from '@mui/material';
import { FeaturesGrid } from './components/FeaturesGrid.tsx';
import WithSubnavigation from './components/nav/NavbarV2.tsx'
import {
  ChakraProvider,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import HeroVideo from './components/Videos/HeroVideo';
import HeaderStack from './components/HeaderStack';

const hideAnimation = {
  overflowX: 'hidden',
  maxWidth: '100%',
  position: 'relative'
}

function App() {
  const [shouldShowActions, setShouldShowActions] = React.useState(false);
  const [lastYPos, setLastYPos] = React.useState(0);
  React.useEffect(() => {

    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;
      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    };
  }, [lastYPos])
  
  return (
    
    <div className="App">
      <header className="App-header"> 
      <HeroVideo />

  
        {/* <GiantTextRow
        src='/assets/images/nicole-hair.jpg'
        txt1='FIND YOUR. TRIBE.'
        txt2='LOVE MORE.'
        align1='right'
        align2='right' /> */}

       <HeaderStack />
        
        <WhatWeOfferGrid />

        <Box mt={15}>
         <GiantTextRow
        dir='row-reverse'
        src='https://storage.googleapis.com/msgsndr/M4LpH9VZkgr3fIOnQTtk/media/6320f9106eefac4fe9a7b933.png'
        txt1="FUEL."
        txt2='YOUR.' />
        </Box>
  

        <Box sx={{m: { xs: 1, sm: 5}}}>
        <GiantText
        txt='REVIEWS.'
        clr='#35373a'
        align='left' />
        </Box>
        {/* reviews section  */}
        <CardV1
        bg='#35373a'
        src='/assets/images/face-girl.jpg'
        clr='#fff'
        txt1='"Plant-based af!"'
        txt2='"In love with all the natural plant based options. My favorite is the smoothies"'
        txt3='Verified yelp-complainer'
        src1='/assets/images/smile-3.jpg'
        txt4='"They are a vibe."'
        txt5='"Huge fan of the space. They have cute seating and really sick decor. Perfect place to WFH"'
        txt6='Verified yelp-reviewer'
        tag1='JENNY. O'
        tag2='@jennyortega'
        tag3='LANDER R.'
        tag4='@landerslander' 
        />

        <CardV1
        bg='#35373a'
        src='/assets/images/avatar-2.jpg'
        clr='#fff'
        txt1='"Bowls are bomb."'
        txt2='"You have to try their smoothie bowls. My favorite is the rollin with the berries!"'
        txt3='Verified yelp-complainer'
        src1='/assets/images/avatar-3.jpg'
        txt4='"Smoothie addict!"'
        txt5='"I can not get enough of their smoothies. My go-to is the Sweet Aloha and raw green juice"'
        txt6='Verified yelp-reviewer'
        tag1='PENELOPE C.'
        tag2='@pcruzin'
        tag3='VERONICA T.'
        tag4='@verointhestreet' 
        />

        <Box sx={{m: { xs: 1, sm: 5}}}>
        <GiantText
        txt='FEATURED.'
        clr='#35373a'
        align='left' />
        </Box>

        <CardV2
        src='/assets/images/1.png'
        title='Strawberry Shawty'
        pri='$8.50'
        cta='Order now'

        src1='/assets/images/2.png'
        title1='Sweet Aloha'
        pri1='$8.50'

        src2='/assets/images/smoothie.gif'
        title2='Box of Chocolates'
        pri2='$8.50'
         /> 
  
  
      </header>
    </div>

  );
}

export default App;
