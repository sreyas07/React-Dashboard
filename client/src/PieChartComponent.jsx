import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PieChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/pie-chart');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const COLORS = ['#5cb85c', '#5cb85c80', '#5cb85c60', '#5cb85c40', '#5cb85c20'];

  return (
    <div style={{ width: '80%', height: '300px', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
      <div style={{ marginTop: '10px', textAlign: 'left' }}>
        {data.map((entry, index) => (
          <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
            <div
              style={{
                width: '1rem',
                height: '1rem',
                backgroundColor: COLORS[index],
                marginRight: '8px',
                borderRadius: '50%',
              }}
            />
            <span style={{ fontSize: '0.8rem' }}>{entry.label}</span>
          </div>
        ))}
      </div>
      <ResponsiveContainer width="80%" height="80%">
        <PieChart>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label={false}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
