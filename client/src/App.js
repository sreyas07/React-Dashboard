import React from 'react';
import DashboardComponent from './DashboardComponent';
// import NavBar from './NavBar';
// import Sidebar from './Sidebar';
// import UserCard from './UserCard';
// import TableComponent from './TableComponent';
// import PieChartComponent from './PieChartComponent';
// import GraphComponent from './GraphComponent';
// import ProfileCard from './ProfileCard';


function App() {
  const containerStyle = {
    margin: 0,
    border: 'none',
    padding: 0,
  };

  return (
    <div style={containerStyle}>
      {/* <TableComponent /> */}
      {/* <PieChartComponent /> */}
      {/* <GraphComponent /> */}
      {/* <ProfileCard/> */}
      {/* <UserCard/> */}
      {/* <Sidebar/> */}
      {/* <NavBar/> */}
      <DashboardComponent />
    </div>
  );
}

export default App;
