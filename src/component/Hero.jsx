import React from 'react'

const Hero = () => {
  return (
 <section className="bg-white w-full py-12 font-sans pt-28">
<div className="w-full flex justify-center flex-col 2xl:space-y-12 space-y-8">
  <div className="flex w-full justify-center px-5">
    <img src="/Hero.png" alt="" className='2xl:w-[680px] lg:w-[400px] w-[360px]' />
  </div>
  <div className="text-center text-[#223568]">
    <p className="font-bold 2xl:text-[64px] text-[48px] leading-[54px] text-center">Innovate. Integrate. Inspire.</p>
    <p className=" 2xl:text-[48px] lg:text-[40px] text-[28px] lg:leading-[54px] text-center">Asatix Leading the Way</p>
  </div>
</div>

 </section>
  )
}

export default Hero