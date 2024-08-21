import React from 'react'
import { Link } from 'react-router-dom'


const NoPage = () => {
  return (
    <div className='default'>
        <h1 style={{fontSize:"40px"}}>404 not page found!</h1>
        <Link to="/myprojects" >Back to Homepage</Link>
    </div>
  )
}

export default NoPage