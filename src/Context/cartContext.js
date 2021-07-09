import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) =>{
    const [products, setProducts] = useState ([])
    console.log(products)

    const addItem = (item, quantity)=>{
        setProducts(prevState => [...prevState,{item:item,quantity:quantity}])
    }

    const removeItem = (itemId)=>{
        setProducts(prevState => (prevState.filter(producto => producto.item.id !== itemId)))
    }

    const clear = ()=>{
        setProducts([])
    }

    const isInCart = (id) => products.some(producto => producto.item.id === id)

    return(
        <CartContext.Provider value={{products, addItem, removeItem, clear, isInCart}}>
            {children}
    
        </CartContext.Provider>
        
    )
   
    

}

 
    