import React from 'react'

const Button = (props) => {
  if (props.text === "Book now") {
    return (
      <div >
        <button className="pr-3 pl-4 py-1 rounded-2xl bg-slate-900 text-white text-xs font-thin 
        sm:py-1.5 
        md:text-[14px] 
        ">
          {props.text}
          <i className="ri-arrow-right-up-long-line font-thin ml-0.5"></i>
        </button>
      </div>
    )
  }
  else {
    return (
      <button className="px-3.5 py-1 rounded-2xl bg-slate-900 text-white text-xs font-thin 
      sm:py-1.5 
      md:text-[14px]
      ">
        {props.text}
      </button>
    )
  }
}

export default Button
