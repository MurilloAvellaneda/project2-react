import { Link } from 'react-router-dom';
import Reorder from './Reorder';
import SearchHero from './SearchHero';
import './HeroCard.css';

const HeroCard = ({handleSortAsc, handleSortDesc, isAsc, characterSearched, searchCharacters}) => {
  const filteredCharacters = characterSearched.filter((character) => 
  character.description.length > 1 && character.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
  )
  return <div className='HeroCard'> 
    <div className='filter'>
      <SearchHero searchCharacters={searchCharacters} />
      <Reorder handleSortAsc={handleSortAsc} handleSortDesc={handleSortDesc} isAsc={isAsc}/>
    </div>
    <div className='FieldCards'>
    {filteredCharacters.map(character => {
      return (<Link className='Card'
                key = {character.id}  
                to = {`/${character.id}`}
              >
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                  alt='character'
                  style={{width: '250px', height: '260px', margin:'2px 2px 2px 2px'}}
                />
                <div className='name'>
                  {character.name}
                </div>
              </Link>)
    })}
    </div>
  </div>;
};

export default HeroCard;