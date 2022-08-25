import React, { useState } from 'react';
import bgmain from '../assets/bgmain.png'
import bgmobile from '../assets/bgmobile.png'
import Back from './Back';
import Front from './Front';
import { useForm } from 'react-hook-form';
import complete from '../assets/complete.svg'


function File({CVC, name, month, number, year}) {
    // }
    return (
        <div className=''>
           
            <div className=" m-auto w-[25rem] text-center ">
                <form action="">
                    <img className='w-[5rem] m-auto ' src={complete} alt="" />
                    <p className='text-[2rem] '>Thank You!</p>
                    <p className='text-sm'>We've added your card details</p>
                    <input className='w-full h-[3rem]  rounded-lg mt-14 bg-[#212121] text-white '
                        type="submit" value="Continue" />
                </form>

            </div>

        </div>
    );
}

export default File;