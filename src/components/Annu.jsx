import React from 'react'

export default function Annu() {
const mystayle={
    width:"30%",
    height:"340px",

}
const mystayle1={
    width:"68%",
    height:"340px",
    
}

  return (
    <>

  <section className='annouc background'>
<div className="container d_flex">
    <div className="img" style={mystayle}>
        <img src="./images/banner-1.png" alt='cloock' width="100%"  height="100%"/>
    </div>
    <div className="img" style={mystayle1}>
        <img src="./images/banner-2.png" alt='cloock' width="100%"  height="100%"/>
    </div>
</div>
  </section>
    </>
  )
}
