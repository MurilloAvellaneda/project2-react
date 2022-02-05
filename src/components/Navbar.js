import { NavLink }  from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className = "nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/heroes-list">Listagem de Herois</NavLink> 
        </nav>

    )
}

export default Navbar;