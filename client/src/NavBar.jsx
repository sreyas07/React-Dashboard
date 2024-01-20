import React from 'react';
import UserCard from './UserCard';

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <div style={leftStyleComponent}>
        <h3>Good Morning</h3>
      </div>
      <div style={rightStyleComponent}>
        <UserCard />
      </div>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50px',
  padding: '20px',
  color: '#0c0c0c',
  backgroundColor: '#d4eaff',
};

const leftStyleComponent = {
  display: 'flex',
  gap: '30px',
  margin: '20px',
};

const rightStyleComponent = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  margin: '20px',
};

export default NavBar;
