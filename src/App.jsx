import React from 'react'
import Navbar from './Components/Navbar'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'

const App = () => {
  return (
    <main className='
    py-10 px-4 bg-[#ffffff]
    sm:py-10 sm:px-6
    md:py-10 md:px-6
    lg:py-10 lg:px-20
    xl:py-10 xl:px-50
    2xl:py-10 2xl:px-60
    '>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  )
}

export default App

