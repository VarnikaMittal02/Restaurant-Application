import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">

            <div className="heading_section">
                <h1 className="heading">We can Serve You</h1>
                <p>"Explore our diverse menu, crafted to cater to every palate, from classic favorites to signature dishes. Each item is carefully prepared using the finest ingredients, ensuring both flavor and quality in every bite."!</p>
            </div>


            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu