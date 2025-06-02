import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Years() {
   const { year } = useParams();
  const navigate = useNavigate();

  const MonthRange = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div style={{margin:"10px"}}>
      <button onClick={() => navigate(-1)}>⏪</button>
      <h2>Month</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {MonthRange.map((month, index) => (
          <div  className='bunny'
            key={index}
            onClick={() => navigate(`/Ledger/${year}/${month}`)}
            style={{
              border: '2px solid black',
              padding: '20px',
              margin: '10px',
              borderRadius: '10px',
              cursor: 'pointer',
              width: '25%',
              textAlign: 'center',
              fontWeight: 'bold',
              backgroundColor: '#f9f9f9',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            {month}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Years;
