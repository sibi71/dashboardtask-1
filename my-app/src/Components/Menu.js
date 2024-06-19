import React from 'react';


const Menu = ({ selectedMenu, setSelectedMenu }) => {
    
      
  return (
    <div className='menu' >
      <button onClick={() => setSelectedMenu('Home')}>Home</button>
      <button onClick={() => setSelectedMenu('Profile')}>Profile</button>
      <button onClick={() => setSelectedMenu('Settings')}>Settings</button>

     
    </div>
  );
};

export default Menu;
