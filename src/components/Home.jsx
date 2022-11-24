import React from 'react'
import data from '../data/db.json'
import {
    Link
  } from "react-router-dom";

const Home = () => {
  return (
    <div className='container_'>
        <ul>Lista de items:</ul>
            {data.map((item, index) => 
                <li className='item__list'><Link to={`/item/${item.cliente}`} > Item {index+1}
                </Link>
                </li>
            )}
    </div>
  )
}

export default Home