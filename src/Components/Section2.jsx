import React from 'react'
import Anchor from './Anchor'
import SmallCircle from './SmallCircle'

const Section2 = () => {
    return (
        <div className='mt-20 flex flex-col justify-start items-start gap-7'>
            <div className="top
      flex flex-col justify-between
      md:flex-row
      ">
                <Anchor text="About Horizon" />
                <p className='w-full pl-2 pr-2 text-slate-900
        md:w-1/2
        '>At Horizon, we don't just play tennis we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros.</p>
            </div>

            <div className="mid
            flex flex-col gap-3
            md:flex-row justify-between items-center
            ">
                <div className="card1 
                rounded-2xl bg-slate-900 p-10
                md:w-1/3 md:p-5 md:pt-2 md:h-72
                ">
                    <img className='w-20' src="./src/assets/tennisCourt.png" alt="" />
                    <p className='text-white inline-block'>Professional hard courts <span className='text-slate-500'>with tournament-grade lighting & climate control play in</span> perfect conditions. in any season</p>
                    <div className='flex gap-2 items-center mt-8'>
                        <div className='w-12 h-6 p-1 bg-sky-500 rounded-3xl flex justify-end '>
                            <div className='w-4 h-4 rounded-full bg-white '> </div>
                        </div>
                        <p className='text-slate-400 font-thin'>Game Mode</p>
                    </div>
                </div>

                <div className="card2 
                relative w-full rounded-2xl overflow-hidden
                md:w-1/3 md:h-72 bg-red-300
                ">
                    <img className='object-cover md:object-cover md:w-full md:h-full' src="https://images.pexels.com/photos/5067814/pexels-photo-5067814.jpeg" alt="" />
                    <p className='absolute z-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  px-4 py-1 font-thin rounded-2xl bg-linear-to-r from-[#ffffff86] to-[#ffffff00] backdrop-blur-xs whitespace-nowrap'>Private & Group Lessons</p>
                </div>

                <div className="card3 
                rounded-2xl bg-[#e1e1ff] pt-5 px-4 pb-4 flex flex-col gap-7
                md:w-1/3 md:h-72 md:px-2 lg:px-4
                ">
                    <div className='flex flex-col gap-2 md:gap-0'>
                        <h1 className='text-6xl font-medium md:text-4xl'>100<i class="ri-add-line"></i></h1>
                        <p className='text-xl font-semibold md:text-xs'>Pro Coaches</p>
                        <p className='text-gray-500 md:text-xs'>Certified professionals ready to boost your game from first serve to tournament level</p>
                    </div>


                    <div className='flex flex-row gap-2 md:gap-1 lg:gap-2'>
                        <div className='flex flex-col '>
                            <p className=''>Beginner</p>
                            <p className=''>Intermediate</p>
                            <p className=''>Advanced</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex justify-start items-center gap-0.5 text-transparent'>
                                A
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                            </div>
                            <div className='flex justify-start items-center gap-0.5 text-transparent'>
                                A
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                            </div>
                            <div className='flex justify-start items-center gap-0.5 text-transparent'>
                                A
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                                <SmallCircle />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className=''>55</p>
                            <p className=''>55</p>
                            <p className=''>55</p>
                        </div>


                    </div>
                </div>
            </div>

            <div className="bot w-full flex flex-col gap-5 py-2 px-4">
                <p className='text-center sm:text-2xl'>A few more facts about us in numbers</p>
                <div className='flex flex-col gap-2 sm:flex-row sm:justify-between'>
                    <div className="box1 sm:w-1/2 flex justify-around ">
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-slate-800 text-2xl font-semibold sm:text-2xl md:text-4xl'>12 000+</h1>
                            <p className='text-slate-700 font-normal text-xs sm:text-sm'>Hours of play anually</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-slate-800 text-2xl font-semibold sm:text-2xl md:text-4xl'>89%</h1>
                            <p className='text-slate-700 font-normal text-xs sm:text-sm'>Player Retention Rate</p>
                        </div>
                    </div>
                    <div className="box2 sm:w-1/2 flex justify-around">
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-slate-800 text-2xl font-semibold sm:text-2xl md:text-4xl'>1,200</h1>
                            <p className='text-slate-700 font-normal text-xs sm:text-sm'>Active Members</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-slate-800 text-2xl font-semibold sm:text-2xl md:text-4xl'>125+</h1>
                            <p className='text-slate-700 font-normal text-xs sm:text-sm'>Annual Tournaments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
