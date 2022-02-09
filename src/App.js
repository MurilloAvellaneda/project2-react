import Navbar from "./components/Navbar";
import HeroCard from "./components/HeroCard";
import {Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import apiCharacters from "./utils/apiCharacters";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [characters, setCharacters] = useState([]) 
  useEffect(() => {
    const fetchData = async () => {
      const newCharacters = await apiCharacters.getAllCharacters()
      console.log(newCharacters)
      setCharacters(newCharacters)
    }
    fetchData()
  }, [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes-list" element={<HeroCard characters={characters}/>} />
      </Routes>

    </>
  );
}

export default App;
