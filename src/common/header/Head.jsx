import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";


const Head = () => {
  return (
    <>
     <section className='head'>
        <div className="container d_flex">

      <div className='left row'>
      <FaPhoneAlt className='ico' />
      <label >+02 01006082709</label>
      <FaEnvelope  className='ico'/>
      <label >ahmedalayde86@gmail.com</label>
        </div>   

        <div className="right row RText">
        <label >Theme FAQ's</label>
        <label >Need Helps</label>
    <span><FaFlag /></span>
    <label>EN</label>
    <span></span>
    <label>Egypt</label>

            </div>  

        </div>
     </section>
    </>
  )
}

export default Head
