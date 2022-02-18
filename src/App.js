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
  const [characterSearched, setCharacterSearched] = useState(characters)

  useEffect(() => {
    const fetchData = async () => {
      const newCharacters = await apiCharacters.getAllCharacters()
      setCharacters(newCharacters)
      const newSearchCharacters = await newCharacters
      setCharacterSearched(newSearchCharacters)
    }
    fetchData()
  }, [])

  console.log(characters)
  
  console.log(characterSearched)

  const handleSortDesc = () => { 
    const charactersData = [...characterSearched]
    const sortData = charactersData.sort((a, b) => a.name > b.name ? -1 : a.name < b.name ? 1 : 0) 
    setCharacterSearched(sortData)
    setIsAsc(false)
  }

  const handleSortAsc = () => { 
    const charactersData = [...characterSearched]
    const sortData = charactersData.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0) 
    setCharacterSearched(sortData)
    setIsAsc(true)
  }

  const searchCharacters = (input) => {
    const characterSearched = characters.filter((character) => character.name.toLowerCase().includes(input.toLowerCase()))
    setCharacterSearched(characterSearched)
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes-list" element={<HeroCard handleSortAsc={handleSortAsc} handleSortDesc={handleSortDesc} isAsc={isAsc} characterSearched={characterSearched} searchCharacters={searchCharacters} />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
    </>
  );
}

export default App;
