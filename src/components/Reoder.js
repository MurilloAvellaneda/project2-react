import "./HeroCard.css"

const Reoder = ({handleSortDesc, handleSortAsc, isAsc}) => {
  return (
    <div>
    {!isAsc ? <button onClick={handleSortAsc}>De A - Z</button> : <button onClick={handleSortDesc}>De Z - A</button>}
    </div>
  )  
}

export default Reoder