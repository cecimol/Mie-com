import { Link } from 'react-router-dom'
import {Item} from '../Item/item'
import './itemList.css'

export const ItemList = ({productos}) => {

    return(
        <div className='productos'>
            {productos.map((item, indice)=>{
                return (
                    <Link
                        key={item.id} 
                        to={'/item/'+ item.id} 
                    >
                        <Item                        
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            pictureURL={item.pictureURL}
                        />
                    </Link>
                )
            })}       
        </div>
    )
}


