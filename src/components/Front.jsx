import React from 'react'
import bgcardF from '../assets/bgcardF.png'

function Front({number, name, month, year}) {
  return (
    <div className=' '>

      <img className='top-[8rem] -right-20' src={bgcardF} alt="" />
      <div className=" absolute top-5 md:w-[24rem]  w-[15rem] m-auto inset-x-0 space-x-3 flex items-center">
        <div className="rounded-full h-7 w-7 md:h-10 md:w-10 bg-white "> </div>
        <div className="rounded-full h-3 w-3 md:h-4 md:w-4 border-white border-[1px] "> </div>
      </div>


      <div className=" text-center  md:tracking-[0.1rem] text-white absolute md:w-[23rem] w-[16rem] m-auto md:bottom-16 bottom-12 inset-x-0 md:text-[1.9rem] text-[1.4rem]  ">
        {number}
      </div>
      <div className=" flex justify-between lg:text-base text-xs w-[15rem] md:w-[23.6rem] m-auto  text-center text-white absolute  inset-x-0 md:bottom-6 bottom-5  ">
        <p className='uppercase'> {name}</p>
        <p className=''>  {month}/{year}</p>
      </div>
    </div>
  )
}

export default Front