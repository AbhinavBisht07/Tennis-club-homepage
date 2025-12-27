import React from 'react'
import Anchor from './Anchor'
import Button from './Button'

const Section3 = () => {
    return (
        <div className='mt-20 flex flex-col gap-3
        md:flex-row justify-center items-center
        '>

            <div className="square1 
            bg-[#ececff] pt-5 px-4 pb-4 rounded-2xl flex flex-col justify-between
            md:w-1/3 md:h-70
            ">
                <div className='flex flex-col gap-5'>
                <Anchor text="Services" />
                <p className='text-xl font-medium text-slate-700
                md:text-sm
                lg:text-lg
                '>Explore our full range of coaching, training, and tennis experiences. From first serve to match point — we've got the right program for you.</p>
                </div>
                <Button text="Explore More" />
            </div>

            <div className="square2 
            relative w-full
            md:w-1/3
            ">
                <img className='rounded-2xl object-cover w-full 
                md:h-70' 
                src="https://img.freepik.com/free-photo/portrait-athletic-female-tennis-player_23-2151190034.jpg?t=st=1766845309~exp=1766848909~hmac=b6bb739c884a84fb55dba08b5721ddc707d6e0f5637e88fe278df7e020ff358b" 
                alt="" />

                <div className='absolute top-0 h-full w-full p-5 flex flex-col justify-between'>
                    <p className='text-white bg-linear-to-r from-[#ffffff8f] to-[#ffffff00] backdrop-blur-[3px] py-1 px-3 w-fit rounded-2xl'>Training Programs</p>
                    <div className='flex justify-between items-center'>
                        <p className='w-[60%] text-white
                        md:text-sm md:w-[70%]
                        lg:text-[16px] lg:w-[70%]
                        '>Programs designed for all ages and abilities.</p>
                        <i className="ri-arrow-right-up-long-line cursor-pointer transition duration-300 ease-in-out active:scale-[0.7] font-thin text-xl bg-black text-white flex justify-center items-center px-2 py-1 rounded-full "></i>
                    </div>
                </div>

            </div>

            <div className="square3 
            rounded-2xl p-5 flex flex-col w-full justify-between
            md:w-1/3 md:h-70 md:p-0
            ">
                <div className='relative'>
                    <img className='w-full h-50 object-cover rounded-2xl
                    md:h-40' 
                    src="https://images.pexels.com/photos/22931876/pexels-photo-22931876.jpeg" 
                    alt="" />

                    <div className='absolute top-0 h-full w-full p-5 flex flex-col justify-between'>
                        <p className='text-white font-normal bg-linear-to-r from-[#ffffff8f] to-[#ffffff00] backdrop-blur-[3px] py-1 px-3 w-fit rounded-2xl'>Court Access</p>
                        <p className='text-white font-semibold'>Hourly Court Rental</p>
                    </div>
                </div>
                <div className='px-5 py-2 flex flex-col gap-3
                md:px-0 md:py-0 md:gap-1
                '>
                    <p className='w-full
                    md:text-sm
                    lg:w-[50%]
                    '>Step into a space built for players — to grow. compete. and thrive.</p>
                    <div className='flex gap-5 p-2'>
                        <i class="ri-arrow-left-long-line cursor-pointer transition duration-300 ease-in-out active:scale-[0.7] font-thin text-xl hover:bg-black hover:text-white text:black flex justify-center items-center px-2 py-1 rounded-full"></i>
                        <i class="ri-arrow-right-long-line cursor-pointer transition duration-300 ease-in-out active:scale-[0.7] font-thin text-xl hover:bg-black hover:text-white text:black flex justify-center items-center px-2 py-1 rounded-full"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
