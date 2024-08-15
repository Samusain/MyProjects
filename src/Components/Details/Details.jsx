import React from 'react'
import './Details.css'
import Mainlayout from '../Layout/Mainlayout'
import { Link } from 'react-router-dom'



const Details = () => {
  return (
    <Mainlayout>
        <div>
            <h1>Still In Progress...</h1> 
            <Link to="/"><p>Home</p></Link>
        </div>
    </Mainlayout>
  )
}

export default Details