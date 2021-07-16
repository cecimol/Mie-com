import { useParams } from 'react-router'
import {useEffect, useState} from 'react'
import {ItemDetail} from '../ItemDetail/itemDetail'
import { dataBase } from '../../Firebase/firebase'

export const ItemDetailContainer = ()=> {
    const [item, setItem]=useState({})
    const {itemId}= useParams()
 
    useEffect(()=>{
        const itemCollection = dataBase.collection('Bebidas');
        const item = itemCollection.doc(itemId);
        item.get().then((item)=>{
            setItem({id:item.id, ...item.data()})
        })
    },[itemId])

    return(
        <ItemDetail 
            id={item.id}
            title={item.title}
            pictureURL={item.pictureURL}
            detalle={item.detalle}
            price={item.price}            
        />
    )
}
