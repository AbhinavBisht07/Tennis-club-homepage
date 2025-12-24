import React from 'react'
import Button from './Button'

const Section1 = () => {
  return (
    <div className='section1 
    mt-15 h-70  rounded-xl text-white bg-[url("https://bramki-sportowe.pl/wp-content/uploads/2025/07/padel.jpg")] bg-no-repeat bg-cover bg-pos bg-center relative py-5 px-4
    sm:mt-5 sm:h-115 sm:pt-10 sm:px-12 sm:pb-4 
    ' >

      <div className="Top 
      text-center flex flex-col gap-3 justify-center items-center
      sm:gap-10
      ">
        <h1 className='text-[19px] sm:text-3xl'>Unleash Your Inner Champion Today. <br /> All In One Place.</h1>
        <p className='
        text-xs font-thin mb-8 sm:text-sm sm:mb-14
        '>Join the ultimate tennis experience where passion meets performance. and every swing brings you closer to victory
        </p>
        <Button text="Start your own journey" />
      </div>

      <div className="Bottom 
      absolute bottom-2 left-4 z-10 flex w-full justify-between
      sm:bottom-4 sm:left-12
      ">
        <div className="left 
        flex flex-col justify-center font-thin  w-fit text-[10px] gap-2
        sm:flex-row sm:items-center sm:text-xs
        ">
          <p>Train with real professionals. <br /> Get the real results.</p>
          <span className='flex  bg-[#ffffffa1] w-fit py-1 px-1.5 rounded-full'>
            <img src="https://png.pngtree.com/thumb_back/fw800/background/20230423/pngtree-a-confident-young-asian-professional-woman-smiling-and-posed-with-a-professional-look-standing-against-a-white-background-photo-image_51657816.jpg" alt="" className='w-6 h-6 object-cover rounded-full' />
            <img src="https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-6 h-6 object-cover rounded-full' />
            <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk=" alt="" className='w-6 h-6 object-cover rounded-full' />
          </span>
        </div>
        <div className="right 
        text-[10px] font-thin flex flex-col mr-8
        sm:flex-row sm:items-center sm:text-xs sm:mr-24
        ">
          <a href="">Instagram <i className="ri-arrow-right-up-long-line font-thin ml-0.5"></i></a>
          <a href="">Facebook <i className="ri-arrow-right-up-long-line font-thin ml-0.5"></i></a>
          <a href="">TikTok <i className="ri-arrow-right-up-long-line font-thin ml-0.5"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Section1
