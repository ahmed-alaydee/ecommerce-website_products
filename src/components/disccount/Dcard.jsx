import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick";
function Dcard() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        marign:200,
      };
  return (
    <>
     <Slider {...settings}>
        {Ddata.map((val, index) => {
          return (
            <div className='box product' key={index}>
          <div className='box ' >

              <div className='img2 '>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>{val.price}</span>
            </div>
            </div>
            
           
          )
        })}
         
         </Slider>
    </>
  )
}

export default Dcard
