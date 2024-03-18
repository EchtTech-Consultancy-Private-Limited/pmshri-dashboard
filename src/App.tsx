import { useEffect, useState } from 'react';
import Home from 'src/pages/Home';


function App() {

  useEffect(() => {
    if (localStorage.getItem('activeState')) {
      localStorage.removeItem('activeState')
    }
    if (localStorage.getItem('activeDistrict')) {
      localStorage.removeItem('activeDistrict')
    }
    if (localStorage.getItem('tempDistrict')) {
      localStorage.removeItem('tempDistrict')
    }
    if (localStorage.getItem('activeCategory')) {
      localStorage.removeItem('activeCategory')
    }
    if (localStorage.getItem('activeBar')) {
      localStorage.removeItem('activeBar')
    }
    if (localStorage.getItem('activeDistrictName')) {
      localStorage.removeItem('activeDistrictName')
    }
    if (localStorage.getItem('activeYear')) {
      localStorage.removeItem('activeYear')
    }
    if (localStorage.getItem('activeStateID')) {
      localStorage.removeItem('activeStateID')
    }
    if (localStorage.getItem('Active_State_ID')) {
      localStorage.removeItem('Active_State_ID')
    }
    if (localStorage.getItem('Active_State_ID')) {
      localStorage.removeItem('Active_State_ID')
    }
    if (localStorage.getItem('Active_Block_ID')) {
      localStorage.removeItem('Active_Block_ID')
    }
    if (localStorage.getItem('Active_District_ID')) {
      localStorage.removeItem('Active_District_ID')
    }
    localStorage.setItem('activeDistrictName','All States');
  }, [])

  return (
    < Home />
  );
}

export default App;
