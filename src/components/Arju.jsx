import React from "react";
import d from './dimond.png'
function CaseStudy() {
  return (
    <div className="w-full h-fit  text-white p-10 lg:px-20 overflow-hidden">
      <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        <div className="lg:col-span-4 flex justify-start items-start flex-col space-y-6">
          <h1 className="text-[56px] font-semibold text-white text-left leading-[66px] w-full lg:w-[50%]">
            In the creative wilderness
          </h1>
          <h1 className="text-[56px] font-semibold text-stone-500 text-left leading-[66px] w-full lg:w-[80%]">
            client find our work truly beloved
          </h1>
          <p className="text-gray-600 text-normal lg:text-lg">
            We are curiosity-driven, inspired by good design, and innovative web
            technologies, and we thrive on collaborating with like-minded brands
            that share these values.
          </p>
          <button className="text-violet-400">view more</button>
          <div className="w-full h-fit flex justify-end">
            <div className="w-40 h-40 ">
                <img src={d} className="w-full h-auto" alt="" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-[30px] mt-[50px] lg:mt-[150px]">
        <div className="w-full h-[442px] bg-black rounded-2xl" style={{backgroundImage :'url("https://cdn.dribbble.com/users/630581/screenshots/12425047/_____1.0_4x.png")',backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
    {/* Content of your image card */}
</div>

          <div className="w-full  p-2 rounded-2xl  flex-col bg-stone-600 bg-opacity-10">
            <h2 className="text-lg  font-thin text-stone-500 ">UI design, UX , WebFrame</h2>
            <h1 className="text-2xl font-bold text-black">EDTH </h1>
          </div>
        <div className="w-full h-[442px] bg-black rounded-2xl" style={{backgroundImage :'url("https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/37a42198964877.5ee855ec746d3.jpg")',backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
    {/* Content of your image card */}
</div>
        </div>
        <div className="lg:col-span-4    relative">
        <div className="absolute flex justify-center items-center top-0 left-1/2 transform -translate-x-1/2 h-[300px] w-full ">
        <div className="w-48 h-48  ">
        <img src={d} className="w-full h-auto" alt="" style={{ filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5))" }} />

        </div>
        </div>
        <div className=" mt-[50px] lg:mt-[300px] flex flex-col gap-[30px]">
        <div className="w-full h-[442px] bg-black rounded-2xl" style={{backgroundImage :'url("https://i.pinimg.com/originals/60/9c/50/609c50fe5d12c8e107cf057fa8730da5.png")',backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
    {/* Content of your image card */}
</div>
<div className="w-full  p-2 rounded-2xl  flex-col bg-stone-600 bg-opacity-10">
            <h2 className="text-lg  font-thin text-stone-500 ">Reasearch,UI UX,CRM</h2>
            <h1 className="text-2xl font-bold text-black">EUROTECH </h1>
          </div>

        <div className="w-full h-[442px] bg-black rounded-2xl" style={{backgroundImage :'url("https://wallpapers.com/images/featured/cute-3d-phone-0v9j2jv4vd985be8.jpg")',backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
    {/* Content of your image card */}
</div>
            </div>
         
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
