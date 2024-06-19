import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ setAuth }) => {
  const [selectedMenu, setSelectedMenu] = useState(localStorage.getItem('selectedMenu') || 'Home');
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem('selectedMenu', selectedMenu);
  }, [selectedMenu]);



  const logout = () => {
      localStorage.removeItem('isAuthenticated');
      setAuth(false)
      navigate('/login');
    };

  return (
    <div className='dashboard_container'>
       
      <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div>
        {selectedMenu === 'Home' && <div>Home </div>}
        {selectedMenu === 'Profile' && <div>Profile </div>}
        {selectedMenu === 'Settings' && <div>Settingst</div>}
      </div>
        <div className='logout'>
        <button  onClick={logout}>Logout</button>
        </div>
   
    </div>
  );
};

export default Dashboard;
