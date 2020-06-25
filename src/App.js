import React from 'react'
import Observer from './Observer'
import cat from './img/cat.jpg'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h2>Do you want to see my cat?</h2>
        <h3>Scroll down, please!</h3>
      </div>

      <div className='container'>
        <Observer>
          <img src={cat} alt='cat' />
        </Observer>
      </div>
    </div>
  )
}

export default App
