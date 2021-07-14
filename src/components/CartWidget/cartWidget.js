import { Link } from 'react-router-dom'
import IconoCarrito from '../../Iconos/IconoCarrito.png'
import './cartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'

export const CartWidget = () => {
    const {products}=useContext(CartContext)

    const cantidadTotal = products.reduce((total, cartItem)=>{
        total = total + cartItem.quantity
        return total
    },0)

    return (
        <Link to='/cart'>
            <div style={{position: 'relative'}}>
                <div className='CantidadContainer'>
                    <div className='CantidadNumero'>{cantidadTotal}</div>
                </div>
                <img className='IconoCarrito' src={IconoCarrito} alt="carrito"/>
            </div>            
        </Link>
    )
}