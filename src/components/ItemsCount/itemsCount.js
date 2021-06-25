import {useState} from 'react'
export const ItemsCount = ({stock, initial, onAdd, onSubstract}) => {
    const [number, setNumber] = useState(initial)
    
    
      
    return(
        <div className=''>
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
                onClick={() => onAdd(number, setNumber)}
            >
                +
            </button>            
            <p>El stock es {stock}</p>
        </div>
    )
}

