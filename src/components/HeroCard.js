import { Link } from 'react-router-dom';

const HeroCard = ({characters}) => {
  return <>
  {console.log(characters)}
  {characters.map(character => {
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