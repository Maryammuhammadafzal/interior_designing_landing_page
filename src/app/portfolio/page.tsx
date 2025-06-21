import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";

const PortfolioPage = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
     <div className="flex w-full h-auto justify-center items-center">
          <div className="flex flex-col gap-10 w-[90%] max-w-7xl py-10 h-auto">
            <div className="headings py-4">
              <h4 className="font-mono text-4xl text-secondary">our services</h4>
              <div className="w-full h-auto py-2 relative flex">
                <h2 className="text-primary max-w-xl sm:leading-16 md:leading-20 md:text-6xl text-5xl font-sans font-bold">
                  Unveiling Our Expertise
                </h2>
                <span className="absolute -bottom-4 md:bottom-20 md:right-[5%] lg:right-[10%] xl:right-[30%] mx-3">
                  <Image
                    src="/images/line2.png"
                    alt="line"
                    width={400}
                    height={200}
                    className="text-primary xl:w-[400px] w-[300px]"
                  />
                </span>
              </div>
            </div>
    
            <div className="xl:w-[95%] w-full h-auto py-4">
             <Slider {...settings}>

             </Slider>
            </div>
          </div>
        </div>
  )
}

export default PortfolioPage