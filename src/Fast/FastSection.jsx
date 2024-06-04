import React from 'react'

function FastSection() {
  return (
    <div className="w-full  flex justify-start  h-fit items-center flex-col    relative px-20 gap-10" >
        <h1
          className={`md:text-[60px] h-fit text-[50px]  text-gray-800 text-opacity-90 leading-tight text-center font-bold w-[80%] md:w-[80%] mx-auto`}
        //   style={{ transform: `scale(${scaleText * 1.5})`, zIndex: 2, position: 'relative' }}
        >
          <div className="flex justify-center items-center gap-3 w-full px">
            the 
            <button className="px-4 rounded-full text-green-500 text-opacity-70 font-semibold flex justify-center items-center text-center">
              Fast
            </button>
            Way  to do
          </div>
          <div> things in online </div>
        </h1>
        <div className='w-full h-96 bg-black '></div>
        
    </div>
  )
}

export default FastSection