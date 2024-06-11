import React, { useState } from 'react'
// import Button from '../Button'
import HomeNavBarButton from '../customComponents/HomeNavBarButton'

export default function ImageCard(
    { imageSrc, altText }
) 
{
    const [hover,setHover]=useState(false)
  return (
    <div className="relative bg-blue-100 rounded-xl shadow-lg overflow-hidden flex items-center w-[21.875rem] justify-center h-"
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}>
    <img src={imageSrc} alt={altText} className={`absolute inset-0 w-[21.875rem] h-auto object-center ${hover ? 'filter blur-sm' : ''} `} />
    {hover &&(
        <HomeNavBarButton className="relative bg-white text-blue-500 py-2 px-4 rounded-full " content={"View More"}/>
    )}
  </div>
  )
}