    import React from 'react'
    import Navbar from '../components/Navbar'
    import HomeLanding from '../Home/HomeLanding'
import UpdateSection from '../update/UpdateSection'
import YoursSection from '../YoursSection/YoursSection'
import SafeSection from '../Safe/SafeSection'
import FastSection from '../Fast/FastSection'

    function LandingPage() {
    return (
        <div className='w-full h-fit flex flex-col'>
            <HomeLanding/>
            {/* <UpdateSection/> */}
            {/* <YoursSection/> */}
            {/* <SafeSection/> */}
            <FastSection/>
            {/* <HomeLanding/> */}
            {/* <YoursSection/> */}
        </div>
    )
    }

    export default LandingPage