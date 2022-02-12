import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiCharacters from '../utils/apiCharacters';

const HeroDetails = () => {

    const [character, setCharacter] = useState({})

    const { id } = useParams()
  
    const getCharacter = async (id) => {
      const data = await apiCharacters.getOneCharacter(id)
      setCharacter(data)
    }
  
    useEffect(() => {
      getCharacter(id)
    }, [id])
    
  return (
      <>
        {character.thumbnail ?
        <div>
            <img 
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                alt='character'
                style={{width: '400px', margin:'2px 10px 2px 2px'}}
            />
            <h1>{character.name}</h1>
            <h2>{character.description}</h2>
            <ul>
            {character.series.items.map((series, index) => {
                return (
                    <li 
                        key = {character.id, index}> 
                        {series.name} 
                    </li>)
                    }
                )
            }
        </ul>  
        </div>
        : "loading"
    }
    </>
  )
}

export default HeroDetails