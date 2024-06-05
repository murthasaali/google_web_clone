import React from 'react'
import HomeNavBarButton from '../customComponents/HomeNavBarButton'

function HomeNavBar({top}) {
  return (
    <div className='w-fit p-4 bg-white shadow-lg sticky top-96 flex justify-between gap-3 rounded-full' style={{marginTop:top&&top}}>
        <HomeNavBarButton content={"Updates"}/>
        <HomeNavBarButton content={"Yours"}/>
        <HomeNavBarButton content={"Safe"}/>
        <HomeNavBarButton content={"Fast"}/>
        <HomeNavBarButton content={"By google"}/>

    </div>
  )
}

export default HomeNavBar