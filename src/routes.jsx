import React from "react";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/itemListContainer";
import { NavBar } from "./components/navBar/navBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemDetailContainer";
import { CartProvider } from "./Context/cartContext";
import { Cart } from "./components/Cart/cart";

export const Routes = ()=> {
  return (
    <CartProvider>
    <Router>
        <NavBar/>
        <Switch>          
          <Route exact path="/">
            <div>1</div>
            <ItemListContainer/>
          </Route>
          <Route path="/category/:categoryId">
            <div>2</div>
            <ItemListContainer/>
          </Route>
          <Route path="/item/:itemId">
            <div>3</div>
            <ItemDetailContainer/>
          </Route>
        </Switch>
        <Route path="/cart">
            <div>4</div>
            <Cart/>
          </Route>
    </Router>
    </CartProvider>
  );
}
