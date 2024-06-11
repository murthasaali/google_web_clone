import React from 'react'

function YoursCarousal() {
  return (
    <div className='w-full h-screen  flex  p-20 text-stone-100  gap-10 '>
        <div className='w-1/2 h-full  rounded-3xl bg-stone-600 ' >
            <img src="https://www.google.com/chrome/static/images/v2/accordion-timed/autofill-2x.webp" className='rounded-3xl h-full w-full' alt="" />
        </div>
        <div className='w-1/2 h-full  rounded-3xl flex flex-col justify-between p-10'>
        <button className='w-full  flex justify-start items-center gap-6 '>
            <div className='p-[2px] h-full bg-blue-400'>

            </div>
            <div className='w-full flex flex-col items-start font-bold text-3xl  '>
                <h1 className='w-[50%] text-start'>Costomise Your chrome</h1>
                <p className='text-lg text-start font-normal'>Personalise your web browser with themes, dark mode and other options built just for you.</p>
                    <div className='text-xl text-blue-400 font-light'>Explore theme</div>
            </div>

        </button>
        <div className='w-full  flex justify-start items-center gap-6 '>
            <div className='p-[2px] h-full bg-stone-400'>

            </div>
            <div className='w-full flex flex-col font-bold text-3xl  '>
                <h1 className='w-[50%]'>Costomise Your chrome</h1>

            </div>

        </div>
        <div className='w-full  flex justify-start items-center gap-6 '>
            <div className='p-[2px] h-full bg-stone-400'>

            </div>
            <div className='w-full flex flex-col font-bold text-3xl  '>
                <h1 className='w-[50%]'>Costomise Your chrome</h1>

            </div>

        </div>
        
        </div>
        
    </div>  )
}

export default YoursCarousal