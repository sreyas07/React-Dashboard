import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/table');
        setTableData(response.data);
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '90%', borderCollapse: 'collapse', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', margin: '20px', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#ffffff', padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>ID</th>
            <th style={{ backgroundColor: '#ffffff', padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Name</th>
            <th style={{ backgroundColor: '#ffffff', padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Quantity</th>
            <th style={{ backgroundColor: '#ffffff', padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff', borderRadius: '10px', border: '1px solid #ddd' }}>
              <td style={{ padding: '12px', textAlign: 'left', borderRight: '1px solid #ddd' }}>{item.id}</td>
              <td style={{ padding: '12px', textAlign: 'left', borderRight: '1px solid #ddd' }}>{item.name}</td>
              <td style={{ padding: '12px', textAlign: 'left', borderRight: '1px solid #ddd' }}>{item.quantity}</td>
              <td style={{ padding: '12px', textAlign: 'left' }}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
