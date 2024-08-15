import React from 'react'
import './Mainlayout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Mainlayout = ({children}) => {
  return (
    <div className='layout'>
        <Header/>
          <div className="progress">{children}</div>
        <Footer/>
    </div>
  )
}

export default Mainlayout