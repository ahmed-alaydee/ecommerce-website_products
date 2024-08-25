import React from 'react'
import Catd from './Catd'
import ShopCart from './ShopCart'
import './Shopstyle.css'
function Shop({shopItems,addToCart}) {
  return (
    <>
     <section className='shop background'>
        <div className="container d_flex">
            <Catd/>

            <div className="contentWidth">

            <div className="heading d_flex">
            <div className="heading-left row f_flex">
                <h2>Mobile Phones</h2>
            </div>
            <div className="heading-right row">
                   <span>View All</span>
                   <i className='fa fa-caret-right'></i>
            </div>
        </div>
           
           <div className="product-content grid1">
            <ShopCart   shopItems={shopItems} addToCart={addToCart}/>
           </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Shop
