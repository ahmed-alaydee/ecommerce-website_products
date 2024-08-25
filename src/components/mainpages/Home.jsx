import "../mainpages/Home.css"
import React from 'react'
import Catrgoris from "./Catrgoris"
import Slidir from "./Slidir"


const Home = () => {
  return <>
 
  <section className="home">
    <div className="container d_flex">
      <Catrgoris/>
      <Slidir/>
     
    </div>
  </section>
  
  
  </>
}

export default Home
