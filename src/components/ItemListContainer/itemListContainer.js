import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ItemList } from '../ItemList/itemList';
import { dataBase } from '../../Firebase/firebase';

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const itemCollection = dataBase.collection('Bebidas');
    itemCollection.get().then((productosSnapshot) => {
      console.log(
        'PRODUCTOS',
        productosSnapshot.docs.map((doc) => doc.data())
      );
      const productos = productosSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      if (categoryId) {
        setProductos(
          productos.filter((producto) => producto.category === categoryId)
        );
      } else {
        setProductos(productos);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};
