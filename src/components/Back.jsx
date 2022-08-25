import React from 'react'
import bgcardB from '../assets/bgcardB.png'

function Back({CVC}) {
  return (
    <div className=' '>

      <img className='' src={bgcardB} alt="" />

      <div className=" absolute top-16 md:top-[2.5rem] lg:top-[6rem] right-10 lg:right-16 text-white lg:text-[1.5rem] text-[1rem]  ">
        <p className=''> {CVC} </p>
      </div>
    </div>
  )
}

export default Back