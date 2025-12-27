import React from 'react'

const Anchor = (props) => {
  if (props.text === "About Horizon" || props.text === "Services") {
    return (
      <div>
        <a href="#" className='text-xs md:text-sm border border-[#d0d0d0] px-2 py-0.5 pb-1 rounded-2xl'>{props.text}</a>
      </div>
    )
  }
  else{
    return (
      <div>
        <a href="#" className='text-xs md:text-sm border border-white hover:border-gray-300 px-2 py-0.5 pb-1 rounded-2xl'>{props.text}</a>
      </div>
    )
  }
}

export default Anchor
