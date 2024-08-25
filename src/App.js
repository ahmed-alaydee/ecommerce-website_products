
import './App.css';
import Pages from './Pages/Pages';
import Header from './common/header/Header';
import {  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Data from "./components/flashDeals/Data"
import Sdata from "./components/shop/Sdata"
import { useState } from 'react';
import Cart from './common/cart/Cart';
import "./components/shop/Sdata"
import Vandoracount from './components/vandpr-account/Vandor-acount';
import FlashDeals from './components/flashDeals/FlashDeals';
import TopCate from './components/top/TopCate';

import Disccont from './components/disccount/Disccont';
import Shop from './components/shop/Shop';

function App() {
  //step 1:fetch data from database
  const {productItems} = Data;
  const {shopItems} = Sdata;

  const[cartItem,setCardItem]=useState([])

  const addToCart =(product) => {
const productExit = cartItem.find((item)=> item.id === product.id)

if(productExit){
  setCardItem(cartItem.map((item) => 

  (item.id === product.id?{...productExit, qty: productExit.qty + 1 } : item)))
}else{
  setCardItem([...cartItem,{...product,qty : 1 }])
}
  }



const decreaseQty =(product)=>{
  const productExit = cartItem.find((item)=> item.id === product.id)
if(productExit.qty === 1){
setCardItem(cartItem.filter((item)=> item.id !== product.id))
}else{
  setCardItem(cartItem.map((item) => (item.id == product.id? {...productExit , qty :productExit.qty-1 } :item)))
}
}

  return (
    <>
    <Router>
    <Header cartItem={cartItem}/>
      <Switch>
        
       <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}   />
          
       </Route>

       <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
       </Route>
       <Route path="/track" exact>
       <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
       </Route>

       <Route path="/vendor" exact>
      <Vandoracount/>
       </Route>

       <Route path="/content" exact>
       <FlashDeals productItems={productItems}  addToCart={addToCart} />
  <TopCate/>
<Disccont/>
<Shop shopItems={shopItems} addToCart={addToCart}/>
       </Route>
      </Switch>
    
    </Router>
    </>
  );
}

export default App;
