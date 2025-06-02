import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'

function AddUser({ addProfile,profile }) {
  const [text, setText] = useState('')
  const [number, setNumber] = useState('')
  const[start,setStart]=useState('')
  const [end,setEnd]=useState('')
  const [image, setImage] = useState('/user.png') // default image path from public folder
  const [selected,setSelected]=useState('')

  const navigate = useNavigate()
  const handleChange=(e)=>{
    const option=e.target.value;
    setSelected(option)

  const startDate=new Date(start)
  let newEndDate

  if(option==="100days"){
    newEndDate=new Date(startDate)
    newEndDate.setDate(startDate.getDate()+100)
  }else if(option==="5months"){
    newEndDate=new Date(startDate)
      newEndDate.setMonth(startDate.getMonth()+5)
    }
    const formatted = newEndDate.toISOString().split('T')[0];
  setEnd(formatted)
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text || !number) {
      alert('Please fill in all fields')
      return
    }
      const exist=profile.some(p=>String(p.number)===String(number))
    if(exist){
        alert('Invalid ID  choose unique ID');
        return;
    }
    alert('Submited Sucessfully')
    
    addProfile({ text, number, image ,start,end}) // include image in submission
    setText('')
    setNumber('')
    setImage('/user.png')
    setStart('')
    setEnd('')

   
  }
 
  

 return (
  <div>
    <h1 style={{ justifyContent: 'center', display: 'flex' }}>ADD USER 👥</h1>

    <div className="form1">
      <form onSubmit={handleSubmit}>
        {/* Hidden image input (if needed later) */}
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image"
          hidden
        /><br />

        {/* Name Input */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Name"
          required
        /><br />

        {/* DC Number */}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="DC.NO"
          required
        /><br />

        {/* Start Date */}
        <label>Start Date:</label><br />
        <input
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
        /><br />

        {/* End Date */}
        <label>End Date:</label><br />
        <input
          type="date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
        /><br />

        {/* Radio Options */}
        <label>Select Duration:</label><br />
        <input
          type="radio"
          name="option"
          value="100days"
          onChange={handleChange}
          checked={selected === "100days"}
        /> 100 Days<br />

        <input
          type="radio"
          name="option"
          value="5months"
          onChange={handleChange}
          checked={selected === "5months"}
        /> 5 Months<br /><br />

        {/* Buttons */}
        <div className="buttonss">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate(-1)}>Back</button>
        </div>
      </form>
    </div>
  </div>
);

}

export default AddUser
