import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DC from './components/DC';
import Home from './components/Home';
import Ledger from './components/Ledger';
import Years from './components/Years'
import Months from './components/Months'
import Dates from './components/Dates'
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import AddUser from './components/AddUser';
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
/>

import "./app.css";

function App() {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);

 

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/entries");
    const result = await res.json();
    setData(result);
  };

  const fetchProfile = async () => {
    const res = await fetch("http://localhost:5000/profile");
    const result = await res.json();
    setProfile(result);
  };

  useEffect(() => {
    fetchData();
    fetchProfile();
  }, []);

  const addData = async (newEntry) => {
    await fetch("http://localhost:5000/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry)
    });
    fetchData();
  };

  const addProfile = async (newProfile) => {
    await fetch("http://localhost:5000/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProfile)
    });
    fetchProfile();
  };
  const deleteProfile=async(number)=>{
    await fetch(`http://localhost:5000/profile/${number}`,{
      method:'delete',
    });
    fetchProfile();
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/DC" element={<DC addData={addData} />} />
      <Route path="/Ledger" element={<Ledger datas={data} />} />
      <Route path="/Ledger/:year" element={<Years/>}/>
      <Route path="Ledger/:year/:month" element={<Months/>}/>
      <Route path="/Ledger/:year/:month/:date" element={<Dates datas={data}/>} />
      <Route path="/Profile" element={<Profile profile={profile} />} />
      <Route path="/Profile/:id" element={<ProfileDetails profile={profile} datas={data} setProfile={setProfile} deleteProfile={deleteProfile} />} />
      <Route path="/AddUser" element={<AddUser addProfile={addProfile} profile={profile} />} />
    </Routes>
  );
}

export default App;
