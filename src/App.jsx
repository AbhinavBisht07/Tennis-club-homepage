import React from 'react'
import Navbar from './Components/Navbar'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'

const App = () => {
  return (
    <main className='
    py-4 px-4 bg-[#ffffff]
    sm:py-6 sm:px-6
    md:py-6 md:px-6
    lg:py-6 lg:px-20
    xl:py-6 xl:px-50
    2xl:py-6 2xl:px-60
    '>
      <Navbar />
      <Section1 />
      <Section2 />
    </main>
  )
}

export default App

