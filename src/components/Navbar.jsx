import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-20 bg-white p-3 flex shadow-sm justify-start gap-5 items-center text-stone-900 text-opacity-70 font-medium'>
        <button className='h-fit w-fit px-4  py-2 flex justify-center items-center gap-2 rounded-xl hover:bg-opacity-10  hover:bg-gray-700'>
            <img src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" className='h-10 w-auto' />
            <div className='text-2xl font-medium text-stone-900 text-opacity-70 '>Chrome</div>
        </button>
        <div className='w-fit h-full  p-5 flex justify-center items-center gap-5 '>
            <button   >home</button>
            <button className='h-fit w-fit px-4  py-2 flex justify-center items-center gap-2 rounded-xl hover:bg-opacity-10  hover:bg-gray-700'>The Browser By Google</button>
            <button className='h-fit w-fit px-4  py-2 flex justify-center items-center gap-2 rounded-xl hover:bg-opacity-10  hover:bg-gray-700'>Features</button>
            <button className='h-fit w-fit px-4  py-2 flex justify-center items-center gap-2 rounded-xl hover:bg-opacity-10  hover:bg-gray-700'>Support</button>
        </div>
    </div>
  )
}

export default Navbar