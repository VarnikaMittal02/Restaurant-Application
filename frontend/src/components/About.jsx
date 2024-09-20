import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";


const About = () => {
    return (
        <section className='about' id='about'>

            <div className='container'>

                <div className='banner'>

                    <div className="top">
                        <h1 className='heading'> HERE IS ABOUT US</h1>
                        <p>The only thing we are serious about is food. </p>
                    </div>

                    <p className="mid">

                        "Welcome to our restaurant's online platform, where we bring convenience and delicious dining together! Our website allows users to effortlessly register and book tables for a memorable dining experience. Explore our extensive menu, complete with prices, to find the perfect dish for your palate. Whether you're planning a casual meal or a special occasion, our easy-to-use booking system ensures that reserving your spot is just a click away. Experience fine dining with simplicity"
                    </p>

                    <Link to={"/"}>Explore Menu <span><HiOutlineArrowRight /></span></Link>
                </div>


                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>


            </div>


        </section>
    )
}

export default About