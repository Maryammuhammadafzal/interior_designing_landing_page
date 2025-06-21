import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div id="hero" className="hero w-[95%] font-sans mx-auto h-screen rounded-3xl flex justify-center items-center bg-cover bg-center relative" style={{ backgroundImage: `url('/images/hero-image.jpg')` }}>
      <div className="overlay w-full h-full bg-black/20 absolute top-0 rounded-[10px] left-0 z-10"></div>
      <div className="w-full h-full absolute top-0 left-0 flex justify-center z-20 items-center">
        <div className="lg:w-[90%] h-full flex justify-center items-center w-full">
          <div className="w-full h-auto flex items-center relative">
                <h1 className="xl:max-w-3xl lg:max-w-2xl xl:text-6xl xs:text-5xl leading-20 text-3xl max-w-md lg:text-5xl md:text-4xl sm:text-6xl sm:max-w-lg  md:max-w-xl text-white uppercase font-bold font-sans">Transform Your Space, Transform Your Life </h1>
          <span className='absolute bottom-10 left-[30%]'><Image src="/images/line.svg" alt="line" width={400} height={200} /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage