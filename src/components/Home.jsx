import React from 'react'
import {  useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate();
  return (
    <>
     <div className='container'>
      <h2 >DC Daily</h2>
      </div>
      <div className='maincontainer'>
        <div className='lftbtn'onClick={()=>navigate('/DC')} >DC 🖋</div>
        <div className='rgtbtn' onClick={()=>navigate('/Ledger')}>Ledger📚</div>
        <div className='pbtn' onClick={()=>navigate('/Profile')}>Profile 👱‍♂️</div>
        <div className='addbtn' onClick={()=>navigate('/AddUser')}>Add User ➕</div>
    </div>
    </>
   
  )
}

export default Home