import React from 'react';
import ReactDOM from 'react-dom/client';
import { routes } from 'src/routes/index'
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AOS from "aos";
import "aos/dist/aos.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'src/styles/global.scss';
import 'src/i18n'
import 'src/styles/App.css'
AOS.init({
  duration: 2000,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter children={routes} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
