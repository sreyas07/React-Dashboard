import React from 'react';
import GraphComponent from './GraphComponent';
import TableComponent from './TableComponent';
import PieChartComponent from './PieChartComponent';
import ProfileCard from './ProfileCard';

const MainContainer = () => {
  return (
    <div style={{ backgroundColor: '#ddeeff', width: '100%', height: '92vh', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: '1', gap: '20px' }}>
        <div style={{ flex: '2' }}><GraphComponent /></div>
        <div style={{ flex: '1' }}><PieChartComponent /></div>
      </div>
      <div style={{ display: 'flex', flex: '1' }}>
        <div style={{ flex: '2' }}><TableComponent /></div>
        <div style={{ flex: '1' }}><ProfileCard /></div>
      </div>
    </div>
  );
};

export default MainContainer;
