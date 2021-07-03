import { Link } from 'react-router-dom'
import IconoCarrito from '../../Iconos/IconoCarrito.png'
import './cartWidget.css'

export const CartWidget = () => {
    return (<Link to='../itemListContainer'><img className='IconoCarrito' 
    src={IconoCarrito} alt="carrito"/>
    </Link>
    )
}