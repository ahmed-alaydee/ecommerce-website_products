import React from 'react'
import Home from '../components/mainpages/Home'
import FlashDeals from '../components/flashDeals/FlashDeals'
import TopCate from '../components/top/TopCate'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Disccont from '../components/disccount/Disccont'
import Shop from '../components/shop/Shop'
import Annu from '../components/Annu'
import Werapper from '../components/werapper/Wrapper'

const Pages = ({productItems,cartItem,addToCart,shopItems}) => {
  return  <>
 
  <Home cartItem={cartItem} />
  <FlashDeals productItems={productItems}  addToCart={addToCart} />
  <TopCate/>
<NewArrivals/>
<Disccont/>
<Shop shopItems={shopItems} addToCart={addToCart}/>
<Annu/>
<Werapper />
  </>
   
  
}

export default Pages
