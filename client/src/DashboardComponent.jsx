import React from 'react';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import MainContainer from './MainContainer';

const DashboardComponent = () => {
  const dashboardStyle = {
    display: 'flex',
    margin: '0',
    padding: '0',
    gap: '0px',
  };

  const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  };

  return (
    <div style={dashboardStyle}>
      <Sidebar />
      <div style={mainContainerStyle}>
        <NavBar />
        <MainContainer />
      </div>
    </div>
  );
};

export default DashboardComponent;
