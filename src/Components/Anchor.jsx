import React from 'react'

const Anchor = (props) => {
  if (props.text === "ABOUT HORIZON" || props.text === "SERVICES") {
    return (
      <div>
        <a href="#" className='text-xs font-medium border border-[#d0d0d0] px-2 py-0.5 pb-1 rounded-2xl'>{props.text}</a>
      </div>
    )
  }
  else{
    return (
      <div>
        <a href="#" className='inline-block text-xs md:text-sm border border-white hover:border-gray-300 px-2 py-0.5 pb-1 rounded-2xl
        cursor-pointer active:scale-[0.9] transition-transform duration-300 ease-in-out active:inset-shadow-[2px_2px_3px_rgba(0,0,0,0.5)]
        '>{props.text}</a>
      </div>
    )
  }
}

export default Anchor
