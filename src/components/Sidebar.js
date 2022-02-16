const Sidebar = ({handleSortDesc, handleSortAsc, isAsc}) => {
  return (
    <div>
    {!isAsc ? <button onClick={handleSortAsc}>De A - Z</button> : <button onClick={handleSortDesc}>De Z - A</button>}
    </div>
  )
}

export default Sidebar