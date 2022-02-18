import { useState } from "react"

const SearchHero = ({searchCharacters}) => {

    const [input, setInput] = useState('')
    
    const handleChange = event => {
        searchCharacters(event.target.value)
        setInput(event.target.value)
    }
    return (
        <div>
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