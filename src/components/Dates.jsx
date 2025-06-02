import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DateView({ datas }) {
  const navigate = useNavigate();
  const { year, month, date } = useParams();

  const monthMap = {
    January: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
  };

  const startYear = year ? year.split('-')[0] : '';

  const dateString = `${startYear}-${monthMap[month]}-${date.padStart(2, '0')}`;

  const filteredEntries = datas.filter(item => item.date === dateString);

  // Calculate total amount
  const totalAmount = filteredEntries.reduce(
    (sum, entry) => sum + Number(entry.number || 0),
    0
  );

  return (
    <div>
      <button onClick={() => navigate(-1)}>⏪ Back</button>
      <h2>Entries for {dateString}</h2>
      {filteredEntries.length === 0 ? (
        <p>No entries for this date.</p>
      ) : (
        <table border={1} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>DC No</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.dcno}</td>
                <td>{entry.number}</td>
              </tr>
            ))}
            <tr>
              <td style={{ fontWeight: 'bold' }}>Total</td>
              <td style={{ fontWeight: 'bold', color: 'red' }}>
                ₹{totalAmount.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DateView;
