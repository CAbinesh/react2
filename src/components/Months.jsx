import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Months() {
    const navigate=useNavigate()
    const {year}=useParams()
    const {month}=useParams()
     const DateRange=Array.from({length:31},(_,i)=>i+1)
 return (
  <div style={{margin:"10px"}} >
    <button onClick={()=>navigate(-1)}>⏪</button>
    <h1 style={{ textAlign: 'center'}}>Date from Month </h1>
    {DateRange.map((date, index) => (
      <div className='bunny'
        key={index}                        
        onClick={() => navigate(`/Ledger/${year}/${month}/${date}`)}
        style={{ cursor: 'pointer', padding: '8px', margin: '5px', border: '1px solid gray', display: 'inline-block', width: '30px', textAlign: 'center' }}
      >
        {date}
      </div>
    ))}
  </div>
);
}

export default Months