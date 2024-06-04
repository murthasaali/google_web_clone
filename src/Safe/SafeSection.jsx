import React from 'react'

function SafeSection() {
  return (
    <div className="w-full  flex justify-start  h-fit items-center flex-col py-10   relative px-20 gap-10" >
         <h1
          className={`md:text-[60px] h-fit text-[50px]  text-gray-800 text-opacity-90 leading-tight text-center font-bold w-[80%] md:w-[80%] mx-auto`}
        //   style={{ transform: `scale(${scaleText * 1.5})`, zIndex: 2, position: 'relative' }}
        >
          <div className="flex justify-center items-center gap-3 w-full px">
            Stay 
            <button className="px-4 rounded-full text-blue-500 text-opacity-70 font-semibold flex justify-center items-center text-center">
              Salt is
            </button>
          </div>
          <div>While you Browse</div>
        </h1>
        <div className="w-full    text-xl text-white grid grid-cols-2 ">
  <div className=" h-auto px-10  ">
    <div className='flex flex-col gap-4 rounded-3xl overflow-hidden p-14 bg-blue-500'>
    <img src="https://www.google.com/chrome/static/images/v2/gallery/save-password-2x.webp" className='w-full rounded-2xl' alt="" />
    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsrchitecto iure? Voluptatibus, quisquam nam! Velit, fuga?</p>
    <button className='px-6 py-2 bg-blue-100 rounded-full text-xl font-semibold text-blue-400 w-fit'>learn more about password</button>

    </div>
  </div>

  <div className=" h-auto px-20  ">
    <div className='flex flex-col gap-4 rounded-3xl overflow-hidden p-14 bg-blue-500'>
    <img src="https://www.google.com/chrome/static/images/v2/gallery/save-password-2x.webp" className='w-full rounded-2xl' alt="" />
    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsrchitecto iure? Voluptatibus, quisquam nam! Velit, fuga?</p>
    <button className='px-6 py-2 bg-blue-100 rounded-full text-xl font-semibold text-blue-400 w-fit'>learn more about password</button>

    </div>
  </div>
  <div className=" h-auto px-20  mt-20">
    <div className='flex flex-col gap-4 rounded-3xl overflow-hidden p-14 bg-blue-500'>
    <img src="https://www.google.com/chrome/static/images/v2/gallery/save-password-2x.webp" className='w-full rounded-2xl' alt="" />
    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsrchitecto iure? Voluptatibus, quisquam nam! Velit, fuga?</p>
    <button className='px-6 py-2 bg-blue-100 rounded-full text-xl font-semibold text-blue-400 w-fit'>learn more about password</button>

    </div>
  </div>
  
  <div className=" h-auto px-10  mt-20 ">
    <div className='flex flex-col gap-4 rounded-3xl overflow-hidden p-14 bg-blue-500'>
    <img src="https://www.google.com/chrome/static/images/v2/gallery/save-password-2x.webp" className='w-full rounded-2xl' alt="" />
    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsrchitecto iure? Voluptatibus, quisquam nam! Velit, fuga?</p>
    <button className='px-6 py-2 bg-blue-100 rounded-full text-xl font-semibold text-blue-400 w-fit'>learn more about password</button>

    </div>
  </div>

</div>

         
    </div>
  )
}

export default SafeSection