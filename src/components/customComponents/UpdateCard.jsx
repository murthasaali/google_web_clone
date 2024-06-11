import React from 'react'

function UpdateCard({bg,image,link,main,head,content}) {
  return (
    <div className={`w-[45%] h-fit text-stone-100  bg-black bg-opacity-10 flex flex-col justify-between items-start p-10 gap-5 rounded-3xl ${bg&&bg}`}>
<h1 className='w-full h-fit text-start text-xl text-stone-600 font-semibold'>{main}
</h1>
<div className='w-[90%]  h-fit text-start   font-bold text-[70px] leading-none '>{head}
</div>
<p className='w-[80%] h-20 text-xl'>{content}</p>
    <a href="#" className='text-blue-400'>{link}</a>
    <img src={image} className='h-64 rounded-3xl' alt="" />
    </div>
  )
}

export default UpdateCard