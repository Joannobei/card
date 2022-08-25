// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';



// function Form() {
//     const { register, formState: { errors }, handleSubmit, getValues } = useForm();
//     const [month, setMonth] = useState('')
//     const [number, setnumber] = useState('')
//     const [name, setName] = useState('')
//     const [year, setYear] = useState('')
//     const [CVC, setCVC] = useState('')

//     const onSubmit = (data) => {
//         console.log(data);
//         // setData((JSON.stringify(getValues('Card_name'))))
//         setnumber((JSON.stringify(getValues('Card_number'))))
//         setName((JSON.stringify(getValues('name'))))
//         setYear((JSON.stringify(getValues('year'))))
//         setCVC((JSON.stringify(getValues('CVC'))))
//         setMonth((JSON.stringify(getValues('month'))))
        
//     }


//     return (
//         <div>
//             <form className='lg:w-[30rem] md:w-[35rem]  w-[23rem] mt-[5rem] md:mt-[8rem] lg:mt-0 m-auto ' onSubmit={handleSubmit(onSubmit)} action="">
//                 <label>CARDHOLDER NAME</label>
//                 <input
//                     type="text"
//                     placeholder="e.g Jane Appleseed"
//                     className="outline-none w-full my-4 rounded-lg h-[56px] px-5 bg-[#F6F4FF] "
//                     {...register("Card_name", {
//                         required: true,
//                     })}
//                 />
//                 {errors.Card_name && (
//                     <p className="text-[#e03434] text-sm">Please check your Name</p>
//                 )}


//                 <label>CARD NUMBER</label>
//                 <input
//                     type="text"
//                     placeholder="e.g 1234 5678 9123 0000"
//                     className="outline-none w-full my-4 rounded-lg h-[56px] px-5 bg-[#F6F4FF] "
//                     {...register("Card_number", {
//                         required: true,
//                     })}
//                 />
//                 {errors.Card_number && (
//                     <p className="text-[#e03434] text-sm">Please check your Card number </p>
//                 )}


//                 <div className=" flex justify-between">

//                     <div className="date w-[10rem] md:w-[13rem] lg:w-[12rem]">
//                         <div>
//                             <label>EXP. DATE (MM/YY) </label>
//                         </div>
//                         <div className="flex justify-between"> <input
//                             type="number"
//                             placeholder="MM"
//                             className="outline-none w-[4.5rem] md:w-[6rem] lg:w-[5.5rem] my-4 rounded-lg h-[46px] px-5 bg-[#F6F4FF] "
//                             {...register("month", {
//                                 required: true,
//                             })}
//                         />
//                             {errors.month && (
//                                 <p className="text-[#e03434] text-sm">Please check your email</p>
//                             )}

//                             <input
//                                 type="year"
//                                 placeholder="YY"
//                                 className="outline-none w-[4.5rem] md:w-[6rem] lg:w-[5.5rem] my-4 rounded-lg h-[46px] px-5 bg-[#F6F4FF] "
//                                 {...register("year", {
//                                     required: true,
//                                 })}
//                             />
//                             {errors.year && (
//                                 <p className="text-[#e03434] text-sm">Please check your year</p>
//                             )}</div>

//                     </div>


//                     <div>
//                         <div>
//                             <label>cvc</label>
//                         </div>

//                         <input
//                             type="number"
//                             placeholder="e.g 123"
//                             className="outline-none w-[11.5rem] md:w-[20rem] lg:w-[16.2rem] my-4 rounded-lg h-[46px] px-5 bg-[#F6F4FF] "
//                             {...register("CVC", {
//                                 required: true,
//                             })}
//                         />
//                         {errors.cvc && (
//                             <p className="text-[#e03434] text-sm">cannot be more than three mumbers</p>
//                         )}
//                     </div>

//                 </div>
//                 Joan
//                  {month}
//                  {number} 
//                  {name} 
//                  {year}
//                  {CVC} 


//                 <input className='w-full h-[3rem] rounded-lg mt-7 bg-[#212121] text-white ' 
               
                   
//                 type="submit" value="Confirm" />

//             </form>

//         </div>
//     )
// }

// export default Form