import Navbar from "./components/Navbar";
import HeroCard from "./components/HeroCard";
import {Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import apiCharacters from "./utils/apiCharacters";
import { useState, useEffect } from "react";
import HeroDetails from "./components/HeroDetails";

function App() {

  const [characters, setCharacters] = useState([])
  const [isAsc, setIsAsc] = useState(true)  
  useEffect(() => {
    const fetchData = async () => {
      const newCharacters = await apiCharacters.getAllCharacters()
      setCharacters(newCharacters)
    }
    fetchData()
  }, [])

  const handleSortDesc = () => { 
    const charactersData = [...characters]
    const sortData = charactersData.sort((a, b) => a.name > b.name ? -1 : a.name < b.name ? 1 : 0) 
    setCharacters(sortData)
    setIsAsc(false)
  }

  const handleSortAsc = () => { 
    const charactersData = [...characters]
    const sortData = charactersData.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0) 
    setCharacters(sortData)
    setIsAsc(true)
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes-list" element={<HeroCard characters={characters} handleSortAsc={handleSortAsc} handleSortDesc={handleSortDesc} isAsc={isAsc}/>} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>

    </>
  );
}

export default App;
