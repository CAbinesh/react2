const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = './data.json';
const PROFILE_FILE='./profile.json';

// Load existing data
function loadData() {
  if (fs.existsSync(DATA_FILE)) {
    const content = fs.readFileSync(DATA_FILE);
    return JSON.parse(content);
  }
  return [];
}

// Save data
function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Get entries
app.get('/entries', (req, res) => {
  res.json(loadData());
});

// Add new entry
app.post('/entries', (req, res) => {
  const data = loadData();
  data.push(req.body);
  saveData(data);
  res.status(201).json({ message: 'Entry saved' });
});

// ---------Profiles section----------
function loadProfile(){
  if(fs.existsSync(PROFILE_FILE)){
   const content= fs.readFileSync(PROFILE_FILE)
   return JSON.parse(content)
  }else{
    return[]
  }
}
function saveProfile(data){
  fs.writeFileSync(PROFILE_FILE, JSON.stringify(data,null,2))
}
app.get('/profile',(req,res)=>{
  res.json(loadProfile())
});
app.post('/profile',(req,res)=>{
  const data=loadProfile();
  data.push(req.body)
  saveProfile(data)
  res.status(201).json({})
})
app.delete('/profile/:number',(req,res)=>{
  const data=loadProfile()
  const updated=data.filter((item)=>item.number !=req.params.number)
  saveProfile(updated)
  res.status(200).json({})
})
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
