import React from 'react'

const Anchor = (props) => {
  return (
    <div>
      <a href="#" className='text-xs border border-white hover:border-gray-300 px-2 py-0.5 rounded-2xl'>{props.text}</a>
    </div>
  )
}

export default Anchor
