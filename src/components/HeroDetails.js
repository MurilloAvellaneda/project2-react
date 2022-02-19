import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiCharacters from '../utils/apiCharacters';
import "./HeroDetails.css"

const HeroDetails = () => {

    const [character, setCharacter] = useState({})
    const [url, setUrl] = useState('')

    const { id } = useParams()
  
    const getCharacter = async (id) => {
      const data = await apiCharacters.getOneCharacter(id)
      const urls = await data.urls[1].url
      setCharacter(data)
      setUrl(urls)
    }

    useEffect(() => {
      getCharacter(id)
    }, [id])

    const [showSeries, setShowSeries] = useState(false)

    const showSeriesList = () => {
      setShowSeries(true)
    }

    const hideSeriesList = () => {
      setShowSeries(false)
    }

    const [showComics, setShowComics] = useState(false)

    const showComicsList = () => {
      setShowComics(true)
    }

    const hideComicsList = () => {
      setShowComics(false)
    }
  
    const goToMarvel = () => {
      window.open(
        url, "_blank");
    }
    
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
                id = "character-detail-img"
              />
              <div className = "buttons-list">
                <div>
                  {!showSeries ? <button className="series-btn" onClick={showSeriesList}>Show Series</button> : <><button className="series-btn" onClick={hideSeriesList}>Hide Series</button><ul className="series-list">
                    <li>Series List</li>
                    {character.series.items.map((series, index) => {
                      return (
                        <li className="serie"
                          key={character.id + index}>
                          {series.name}
                        </li>);
                    }
                    )}
                  </ul></>}
                </div>
                <div>
                  {!showComics ? <button className="series-btn" onClick={showComicsList}>Show Comics</button> : <><button className="series-btn" onClick={hideComicsList}>Hide Comics</button><ul className="series-list">
                    <li>Comics List</li>
                    {character.comics.items.map((comics, index) => {
                      return (
                        <li className="serie"
                          key={character.id + index}>
                          {comics.name}
                        </li>);
                    }
                    )}
                  </ul></>}
                </div>
                <div>
                  <button className="series-btn" onClick={goToMarvel}>See on Marvel Website</button>
                </div>
              </div>
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
