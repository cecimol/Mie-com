import "./itemsCount.css"
import {useState} from 'react'
export const ItemsCount = ({stock, initial, onAdd, onSubstract, onIncrement}) => {
    const [number, setNumber] = useState(initial)
    
    
      
    return(
        <div className='barra'>
            <label htmlFor='number'>
                <p>Agregar productos</p> 
            </label> 
            <button 
                onClick={() => onSubstract(number, setNumber)}
            >
                -
            </button>         
            <input
                id='number'
                type='text'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button
                onClick={() => onIncrement(number, setNumber)}
            >
                +
            </button>            
            <p>El stock es {stock}</p>
            <button onClick={() => onAdd(number)}>
                Agregar al carrito
            </button>
        </div>
        
    )
}

