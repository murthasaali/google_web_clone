import React from 'react'
import UpdateCard from '../customComponents/UpdateCard'

function UpdateSection() {
  return (
    <div className='w-full  flex justify-center items-center flex-col p-10 gap-5   h-fit  '>
<h1 className='md:text-[80px] text-[50px] text-gray-800 text-opacity-90 leading-tight text-center font-bold w-[80%] md:w-[80%] mx-auto'>
 <div>Discover the latest</div>
 <div className='flex justify-center items-center gap-3 w-full'>
    <button className='   px-4  rounded-full text-blue-500 text-opacity-70 flex justify-center items-center text-center '>updates{" "} </button>
     {" "}from chrome</div>
   
</h1>
<div className='w-full h-fit flex  justify-evenly'>
    <UpdateCard bg={"bg-cyan-400"} image={"https://www.google.com/chrome/static/images/engagement-homepage/updates/updates-2x.png"} link={"Learn about automatic updates"} content={"There’s a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser."}
    head={"Automatic updates"}
    main={"UPDATES"}
     />
    <UpdateCard bg={"bg-rose-400"} image={"https://www.google.com/chrome/static/images/chrome-logo-m100.svg"}
    content={"Chrome regularly updates with tools and features that make it faster and easier to use.    "}
    link={"Learn Whats New On Chrome"}
    head={"New from Chrome    "}
    main={"LATEST"}
    />
</div>




    </div>
  )
}

export default UpdateSection