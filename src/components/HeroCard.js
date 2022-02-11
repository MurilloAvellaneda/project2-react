import { Link } from 'react-router-dom';

const HeroCard = ({characters}) => {
  const filteredCharacters = characters.filter((character) => 
    character.description.length > 1 && character.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
  )
  return <>
  {console.log(characters)}
  {filteredCharacters.map(character => {
    return (<Link 
              key = {character.id}  
              to = {`/${character.id}`}
            >
              <img 
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                alt='character'
                style={{width: '250px', margin:'2px 10px 2px 2px'}}
              />
              <p>
                {character.name}
              </p>
              <p>
                {character.description}
              </p>
            </Link>)
  })}
  </>;
};

export default HeroCard;