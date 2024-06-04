import React from 'react'

function HomeNavBarButton({content}) {
  return (
    <button className='h-fit w-fit px-4   py-2 flex text-stone-800 text-opacity-70 justify-center items-center gap-2 rounded-full hover:bg-opacity-10  hover:bg-stone-500'>
        {content}
    </button>
  )
}

export default HomeNavBarButton