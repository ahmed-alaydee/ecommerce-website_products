import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>
   <footer>
    <div className="container grid2">
        <div className="box">
            <h1>Bonik</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi neque aspernatur voluptates architecto mollitia ex incidunt vitae suscipit accusantium ab distinctio sunt quae quod velit in porro, necessitatibus eius!</p>
            <div className="icon d_flex">
                <div className="img d_flex">
                    <i className='fa-brands fa-google-play'></i>
                    <span>Google Play</span>
                </div>

                <div className="img d_flex">
                <i className='fa-brands fa-app-store-ios'></i>
                    <span>App Store</span>
                </div>
            </div>
        </div>
        <div className="box">
            <h2>About Us</h2>
            <ul>
             
               <li>careers</li> 
               <li>our Stores</li> 
                <li>our Cares </li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        div
    </div>
   </footer>
    </>
  )
}
