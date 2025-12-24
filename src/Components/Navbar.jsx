import React from 'react'
import Button from './Button'
import Anchor from './Anchor'

const Navbar = () => {
  return (
    <nav className='
    flex justify-between relative
    
    '>
      <h1 class="text-xl font-medium">Horizon Courts</h1>
      <div className="menu 
      w-max absolute top-[200%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex gap-2
      sm:static sm:translate-x-0 sm:translate-y-0
      ">
        <Anchor text="About Us"/>
        <Anchor text="Services"/>
        <Anchor text="Coaches"/>
        <Anchor text="Events"/>
        <Anchor text="Contacts"/>
      </div>

      <Button text="Book now"/> 

    </nav>
  )
}

export default Navbar
