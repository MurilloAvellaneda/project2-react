import { Link } from 'react-router-dom';

const HeroCard = (characters) => {
  return <>
  {characters.map(character => {
    return (<Link 
              key = {character.id}  
              to = {`/${character.id}`}
            >
              <img 
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                alt='character'
                style={{width: '25px', margin:'2px 10px 2px 2px'}}
              />
            </Link>)
  })}
  </>;
};

export default HeroCard;