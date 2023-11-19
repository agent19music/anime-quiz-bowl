import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Anime from './Anime';
import About from './About';
import Leaderboard from './Leaderboard';
import Layout from './layout/Layout';
import Homepage from './Homepage';
import Navbar from './layout/Navbar';
import Landingpage from './Landingpage';
import Levelpick from './Levelpick';
import Questionholder from './Questionholder';

function App() {
const [animes, setAnimes] = useState([]) 
const [isDarkmode, setIsDarkmode] = useState(false)
const [username, setUsername] = useState('')

  useEffect(()=>{
    fetch(' http://localhost:8001/animes')
    .then((res)=>res.json())
    .then((res)=> setAnimes(res))
  },[])

  const toggleDarkMode = () => {
    setIsDarkmode(!isDarkmode);
  };
  const toggle = isDarkmode ? ' bg-dark text-white' : 'bg-light text-black'
  const toggle2 = isDarkmode ? 'dark':'light';
  const toggle3 = isDarkmode ? 'white': 'black'

  

  
  return (
    <div className={toggle}>
      <BrowserRouter>
      <Navbar toggle={toggle} toggle2={toggle2} toggleDarkMode={toggleDarkMode}/>
      <Routes>
      <Route index element={<Landingpage username={username} setUsername={setUsername} />} />  
      <Route path="/homepage" element={<Anime toggle={toggle} />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/leaderboard" element={<Leaderboard toggle2={toggle2} />} />
      <Route path="/" element={<Layout />} />
      <Route path="/home" element={<Homepage animes={animes}  />} />
      <Route path='/home/:title' element={<Levelpick animes={animes}/>}/>
      <Route path="/levelpick/:animeId" element={<Levelpick />} />
      <Route path="/questionholder/:difficulty/:animeId" element={<Questionholder username={username}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
