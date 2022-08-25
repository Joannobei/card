import React, { useState } from 'react';
import bgmain from '../assets/bgmain.png'
import { useNavigate } from 'react-router-dom';
import bgmobile from '../assets/bgmobile.png'
import Back from './Back';
import Front from './Front';
import { useForm } from 'react-hook-form';
import complete from '../assets/complete.svg'
import NumberFormat from 'react-number-format';


function File() {
    const { register, formState: { errors }, formState, handleSubmit, getValues } = useForm();
    const { isSubmitSuccessful, isValid } = formState
    const [month, setMonth] = useState('00')
    const [number, setnumber] = useState('0000 0000 0000 0000')
    const [name, setName] = useState('JOAN NOBEI')
    const [year, setYear] = useState('00')
    const [CVC, setCVC] = useState('000')
    const navigate = useNavigate()

    // const [toggleState, setToggleState] = useState(1);
    // const toggleTab = (tab) => {
    //     setToggleState(tab);
    // };
    // const activeTabs = ""
    // const tabs = "  ";

    // const activeContent = " ";
    // const content = " hidden  ";

    const onSubmit = (data) => {
        console.log(data);

        setnumber(((getValues('Card_number'))))
        setName(((getValues('Card_name'))))
        setYear(((getValues('year'))))
        setCVC(((getValues('CVC'))))
        setMonth(((getValues('month'))))
    }
    return (
        <div className='lg:flex'>
            <div className="relative block lg:hidden ">
                <img className='w-full h-[15rem] md:h-[20rem] ' src={bgmobile} alt="" />
                <div className="absolute  inset-x-0 top-0  m-auto md:w-[35rem] w-[24rem] h-[20rem] md:h-[20rem]">
                    <div className="absolute top-10 md:top-[2rem] right-5 w-[18rem] md:w-[28rem] rounded-lg">
                        <Back CVC={CVC} />
                    </div>

                    <div className="absolute w-[18rem]  bottom-8 md:-bottom-[6rem] right-[4rem] md:right-[7rem] md:w-[28rem] rounded-lg">
                        <Front name={name} month={month} number={number} year={year} />
                    </div>
                </div>

            </div>

            <div className=" w-1/3 h-screen relative lg:block hidden">
                <img className='w-full h-screen' src={bgmain} alt="" />
                <div className="absolute w-[27rem] h-[15rem] top-[8rem] -right-20 rounded-lg">
                    <Front name={name} month={month} number={number} year={year} />
                </div>

                <div className="absolute top-[26rem] w-[27rem] h-[15rem] -right-40 rounded-lg">
                    <Back CVC={CVC} />

                </div>
            </div>


            <div className='flex  m-auto justify-center items-center'  >
                
                <form className='  lg:w-[30rem] md:w-[35rem]  w-[23rem] mt-[5rem] md:mt-[8rem] lg:mt-0 m-auto            ' onSubmit={handleSubmit(onSubmit)} action="">
                    {isSubmitSuccessful ? (
                        <div className=" m-auto w-[23rem] text-center ">
                            <form action="">
                                <img className='w-[5rem] m-auto ' src={complete} alt="" />
                                <p className='text-[2rem] '>Thank You!</p>
                                <p className='text-sm'>We've added your card details</p>
                                <input className='w-[23rem] h-[3rem]  rounded-lg mt-14 bg-[#212121] text-white '
                                    type="submit" value="Continue" />
                            </form>
                        </div>


                    ) : <div><label>CARDHOLDER NAME</label>
                    <div className="my-4">
                        <input style={{ border: errors.Card_name ? '1px solid #e03434' : '' }}
                            type="text"
                            placeholder="e.g Jane Appleseed"
                            className="outline-none w-full  rounded-lg h-[56px] px-5 bg-[#F6F4FF] "
                            {...register("Card_name", {
                                required: {
                                    value: true,
                                    message: 'Cant be blank'
                                },
                            })}
                        />
                        {errors.Card_name && (
                            <p className="text-[#e03434] text-sm">{errors.Card_name.message}</p>
                        )}
                    </div>


                    <div className="w">

                    </div>
                    <label>CARD NUMBER</label>
                    
                    <div className="my-4 ">
                    {/* <NumberFormat format='#### #### #### ####' /> */}
                        <input style={{ border: errors.Card_number ? '1px solid #e03434' : '' }}
                            type="tel"
                            placeholder="e.g 1234 5678 9123 0000" maxLength="17"
                            className="outline-none w-full rounded-lg h-[56px] px-5 bg-[#F6F4FF] "
                            {...register("Card_number", {
                                required: {
                                    value: true,
                                    message: 'Can not be blank'
                                },
                                message: 'Can not be blank',
                                pattern: {
                                    value: /^(.{4})(.{4})(.{4})(.*)$/,
                                    message: 'Please input the correct format'
                                }
                            })}
                        /> 
                        {errors.Card_number && (
                            <p className="text-[#e03434] text-sm">{errors.Card_number.message}</p>
                        )}

                    </div> 



                    <div className=" flex justify-between">

                        <div className="date w-[10rem] md:w-[13rem] lg:w-[12rem]">
                            <div>
                                <label>EXP. DATE (MM/YY) </label>
                            </div>
                            <div className="flex justify-between ">
                                <div className="my-2 ">
                                    <input style={{ border: errors.month ? '1px solid #e03434' : '' }}
                                        type="number"
                                        placeholder="MM"
                                        className="outline-none w-[4.5rem] md:w-[6rem] lg:w-[5.5rem] rounded-lg h-[46px] px-5 bg-[#F6F4FF] "
                                        {...register("month", {
                                            required: {
                                                value: true,
                                                message: 'Can not be blank'
                                            },
                                            pattern: {
                                                value: /^(0[1-9]|1[0-2])$/i,
                                                message: 'Please input the correct format'
                                            }
                                        })}
                                    />
                                    {errors.month && (
                                        <p className="text-[#e03434] text-sm">{errors.month.message}</p>
                                    )}
                                </div>

                                <div className="my-2">
                                    <input style={{ border: errors.year ? '1px solid #e03434' : '' }}
                                        type="year"
                                        placeholder="YY"
                                        className="outline-none w-[4.5rem] md:w-[6rem] lg:w-[5.5rem]  rounded-lg h-[46px] px-5 bg-[#F6F4FF] "
                                        {...register("year", {
                                            required: {
                                                value: true,
                                                message: 'Can not be blank'
                                            },
                                            pattern: {
                                                value: /^[0-9]{2}$/i,
                                                message: 'Please input the correct format'
                                            }
                                        })}
                                    />
                                    {errors.year && (
                                        <p className="text-[#e03434] text-sm">{errors.year.message}</p>
                                    )}
                                </div>


                            </div>

                        </div>


                        <div>
                            <div>
                                <label>cvc</label>
                            </div>
                            <div className="my-2">
                                <input style={{ border: errors.CVC ? '1px solid #e03434' : '' }}
                                    type="number"
                                    placeholder="e.g 123"
                                    className="outline-none w-[11.5rem] md:w-[20rem] lg:w-[16.2rem]  rounded-lg h-[46px] px-5 bg-[#F6F4FF] "
                                    {...register("CVC", {
                                        required: {
                                            value: true,
                                            message: 'Can not be blank'
                                        },
                                        pattern: {
                                            value: /^[1-9]{3}$/i,
                                            message: 'Please input the correct format'
                                        }
                                    })}
                                />
                                {errors.CVC && (
                                    <p className="text-[#e03434] text-sm">{errors.CVC.message}</p>
                                )}
                            </div>

                        </div>

                    </div>
                   



                    <input
                        className='w-full h-[3rem] rounded-lg mt-7 bg-[#212121] text-white text-center'
                        type="submit" value="Confirm" /></div>}
                    

                    
                </form>
                
            </div>


        </div>
    );
}

export default File;