import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from '@mui/material/GlobalStyles';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import LocationsRoute from './components/LocationsRoute';
import ScheduleWidget from './components/ScheduleWidget';
import Footer from './components/Footer';
import InfoSectionV1 from './components/InfoSectionV1';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { Faq } from './components/Faq.tsx';
import { ChakraProvider } from '@chakra-ui/react'
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles styles={{ body: { backgroundColor: '#2c2d30'}}} />
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="LocationsRoute" element={<LocationsRoute />} />
      <Route path="ScheduleWidget" element={<ScheduleWidget />} />
      <Route path="InfoSectionV1" element={
      <InfoSectionV1
            bg='#f0f0f6'
            txt='FIND YOUR TRIBE'
            txt2='Your not just joining a gym. Were a group of movers, growers, and motivators.'
            txt3='Find your home at Ritual and never look back.'
            src2='/assets/images/girl-gang.jpg'
            cta='Book class — first class free' vis={undefined} src1={undefined} />} />
      <Route path="Faq" element={<Faq />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
