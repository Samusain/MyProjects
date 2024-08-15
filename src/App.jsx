import React from 'react'
import './App.css'
// import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
// import Footer from './Components/Footer/Footer'
import Mainlayout from './Components/Layout/Mainlayout'



const App = () => {
  return (
      <div className='app'>
        <Mainlayout>
          <Main/>
        </Mainlayout>
      </div>
  )
}

export default App