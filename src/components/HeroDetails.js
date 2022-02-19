import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiCharacters from '../utils/apiCharacters';
import "./HeroDetails.css"

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
          <div className = "container">
            <h1>{character.name}</h1>
            <div className = "character-img-series">
              <img 
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                alt='character'
                style={{width: '450px', margin:'2px 10px 2px 2px'}}
              />
              <ul className = "series-list">
              <li>Series List</li>
              {character.series.items.map((series, index) => {
                  return (
                      <li className = "serie"
                          key = {character.id, index}> 
                          {series.name} 
                      </li>)
                      }
                  )
              }
              </ul>
            </div>
          </div>
          <div className = "description">    
            <div className = "container" >  
                <h2>{character.description}</h2>
            </div>
          </div>
        </div> 
        : "loading"
        }
      </>
  )
}

export default HeroDetails