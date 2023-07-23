import React from 'react'
import Products from './Products'

function Home() {
  return (

    <>
      <header className='Home-Header text-center'>
        <h3>Welcome To E-Market</h3>
        <p>Make Things Easier!</p>
      </header>
      <Products />
    </>

  )
}

export default Home