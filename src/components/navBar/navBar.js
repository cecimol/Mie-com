import {CartWidget} from '../CartWidget/cartWidget'
import "./navBar.css"
export const NavBar = () => {

    return(    
    <nav className="navbar">
        <h1>La Petaquita</h1>
        <ul className= "lista">
            <li>Vinos</li>
            <li>Espumantes </li>
            <li>Cervezas</li>
            <li>Whisky</li>
            <li>Destilados</li>
        </ul>   
        <CartWidget/>
    </nav>
        
    )
}