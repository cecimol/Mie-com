import { useState, useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom';
import { dataBase } from '../../Firebase/firebase';

export const Cart = () => {
  const [msgCompraFinalizada, setMsgCompraFinalizada] = useState('');
  const { isCartEmpty, products, removeItem, getOrder, clear } =
    useContext(CartContext);
  const handleClick = () => {
    const order = getOrder();
    const ordersCollection = dataBase.collection('Ordenes');
    ordersCollection
      .add(order)
      .then((newOrder) => {
        setMsgCompraFinalizada(
          'La compra finalizó con éxito, tu comprobante es: ' + newOrder.id
        );
        clear();
      })
      .catch((error) => {
        console.log('ocurrio un error al guardar la orden');
      });
  };
  const mostrarProductosOMensaje = () => {
    if (isCartEmpty()) {
      return (
        <div>
          <p>No hay productos en el carrito</p>
          <Link to='/'>
            <button>Ir a comprar</button>
          </Link>
        </div>
      );
    } else {
      const precioTotal = products.reduce((total, cartItem) => {
        total = total + cartItem.item.price * cartItem.quantity;
        return total;
      }, 0);
      return (
        <div>
          {products.map((cartItem) => {
            return (
              <div key={cartItem.item.id}>
                <div>
                  <img
                    style={{ height: '50px' }}
                    src={cartItem.item.pictureURL}
                    alt='imagen'
                  />
                </div>
                <div>Cantidad: {cartItem.quantity}</div>
                <div>Titulo: {cartItem.item.title}</div>
                <div>Precio: $ {cartItem.item.price * cartItem.quantity}</div>
                <button onClick={() => removeItem(cartItem.item.id)}>
                  Eliminar del carrito
                </button>
              </div>
            );
          })}
          <div>Precio Total: $ {precioTotal}</div>
          <button onClick={handleClick}>Finalizar Compra</button>
        </div>
      );
    }
  };

  return (
    <div>
      <div>{msgCompraFinalizada}</div>
      {mostrarProductosOMensaje()}
    </div>
  );
};
