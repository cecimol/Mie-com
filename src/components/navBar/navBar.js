import { Link } from 'react-router-dom'
import {CartWidget} from '../CartWidget/cartWidget'
import "./navBar.css"
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'

export const NavBar = () => {

    const {isCartEmpty}=useContext(CartContext)
    const mostrarCarritoONo = () => {
        if(!isCartEmpty()){
            return(<CartWidget/>) 
        }
                           
    }  


    return(    
    <nav className="navbar">
        <h1><Link to='/'>La Petaquita</Link></h1>
        <ul className= "lista">
            <li>
                <Link to='/category/vinos'>Vinos</Link>
                </li>
            <li>
                <Link to='/category/espumantes'>Espumantes</Link> 
                </li>
            <li>
                <Link to='/category/cervezas'>Cervezas</Link>
                </li>
            <li>
                <Link to='/category/whisky'>Whisky</Link>
                </li>
            <li>
                <Link to='/category/destilados'>Destilados</Link>
                </li>
        </ul> 

    <div>{mostrarCarritoONo()}</div> 
        
    </nav>
        
    )
    
}