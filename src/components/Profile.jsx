import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile({ profile }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filterSearch = profile.filter((entry) =>
    entry.text.toLowerCase().includes(search.toLowerCase()) ||
    entry.number.toString().includes(search)
  );
  return (
    <div style={{margin:"10px"}}>
       <button className='sticky' onClick={() => navigate(-1)}>Back</button>
      <input className='sticky'style={{width:'50%'}}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔎....."
      />

      <div className="profile-container">
        {filterSearch.length > 0 ? (
            filterSearch
      .sort((a, b) => a.number - b.number)
      .map((entry, index) => (
            <div
              key={index}
              className="profile-card"
              onClick={() => navigate(`/Profile/${entry.number}`)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={entry.image || '/user.png'}
                alt="Profile"
                style={{ width: '100px', height: '100px' }}
              />
              <h3 style={{ color: 'blue' }}>NAME: {entry.text}</h3>
              <h5 style={{ color: 'red' }}>DC.NO: {entry.number}</h5>
              <p>Tap to view entries</p>
            </div>
          ))
        ) : (
          <p>No Data Found</p>
        )}
      </div>

    </div>
  );
}

export default Profile;
