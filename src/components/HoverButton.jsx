import React from 'react'

function HoverBtton(  { className, value, bg, icon, btnLink, }
) {
  return (
    <div >

    <button onClick={btnLink} className={`px-2 md:px-5 lg:px-[1.563rem] py-[0.625rem] md:py-3 border-[0.094rem] flex justify-center items-center gap-1 md:gap-2 
       ${bg ? bg : 'bg-transparent'}  ${className}`}>{value}{icon} </button>
  </div>
  )
}

export default HoverBtton