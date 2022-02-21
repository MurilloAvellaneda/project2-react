import { useState } from "react"
import "./HeroCard.css"

const SearchHero = ({searchCharacters}) => {

    const [input, setInput] = useState('')
    
    const handleChange = event => {
        searchCharacters(event.target.value)
        setInput(event.target.value)
    }
    return (
        <div className="search">
            <input
                type = 'text'
                placeholder = 'Start typing to search'
                value={input}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchHero