import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DC({addData}) {
  const [text,setText]=useState('')
  const[number,setNumber]=useState('')
  const[date,setDate]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!text||!number||!date){
      alert("Fill All The Fields Given below!👇")
    }
    addData({dcno:text,number,date})
    setText('')
    setNumber('')
  }
  const navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>navigate(-1)}>⏪</button>
      <div className='form'>
    <form onSubmit={handleSubmit}>
      <input type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder='DC NO'
       /><br/>
       <input type="number"
       value={number}
       onChange={(e)=>setNumber(e.target.value)}
       placeholder='₹' /><br />
       <input type="date"
       value={date}
       onChange={(e)=>setDate(e.target.value)} /><br/><br />
      <div className='buttonss'>
         <button>Submit</button>
      </div>
    </form>

</div>
    </div>
  )
}

export default DC