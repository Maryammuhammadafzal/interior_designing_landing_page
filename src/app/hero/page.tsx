import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div id="hero" className="hero w-[95%] mx-auto h-screen rounded-3xl flex justify-center items-center bg-cover bg-center relative" style={{ backgroundImage: `url('/images/hero-image.jpg')` }}>
      <div className="overlay w-full h-full bg-black/20 absolute top-0 rounded-[10px] left-0 z-10"></div>
      <div className="w-full h-full absolute top-0 left-0 flex justify-center">
        <div className="lg:w-[90%] h-auto flex flex-col gap-10 sm:gap-16 lg:gap-10 xl:gap-0 justify-between items-center w-full lg:px-0 px-3 py-10">
          <div className="w-full">
                <h1 className="xl:max-w-3xl lg:max-w-2xl xl:text-8xl xs:text-5xl text-3xl max-w-md lg:text-[80px] md:text-7xl sm:text-6xl sm:max-w-lg  md:max-w-xl md:leading-22 lg:leading-26 text-white uppercase font-bold xl:leading-30 font-sans">Transform Your Space, Transform Your Life <span><Image src="/images/line.svg" alt="line" width={200} height={200} /></span></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage