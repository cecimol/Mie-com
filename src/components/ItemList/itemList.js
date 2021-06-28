import {Item} from '../Item/item'
import './itemList.css'

export const ItemList = ({productos}) => {

    return(
        <div className='productos'>
            {productos.map((item, indice)=>{
                return (
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        pictureURL={item.pictureURL}
                    />
                )
            })}       
        </div>
    )
}


