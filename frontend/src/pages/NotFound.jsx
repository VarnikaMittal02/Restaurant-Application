import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";



const NotFound = () => {
  return (
    <section className='notFound'>

      <div className="container">


        <img src="/notFound.svg" alt="notFound" />
        <h1>LOOKS LIKE YOU ARE LOST </h1>
        <p>we can't seem to find you are looking for</p>
        <Link to={"/"}> Back to home <span>  <HiOutlineArrowNarrowRight /></span> </Link>
      </div>


    </section>
    
  )
}

export default NotFound