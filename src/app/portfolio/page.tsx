"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const PortfolioPage = () => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="flex w-full h-auto justify-center items-center">
      <div className="flex flex-col gap-10 w-[90%] max-w-7xl py-10 h-auto">
        <div className="headings py-4">
          <h4 className="font-mono text-4xl text-secondary">Portfolio</h4>
          <div className="w-full h-auto py-2 relative flex">
            <h2 className="text-primary max-w-xl sm:leading-16 md:leading-20 md:text-6xl text-5xl font-sans font-bold">
             Showcasing Our Artistry
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
          <Slider {...settings} className="flex gap-5">
            <div
              className="w-[330px] font-sans group mx-auto h-[460px] flex justify-center items-center bg-cover bg-center relative"
              style={{ backgroundImage: `url('/images/portfolio-image1.jpg')` }}
            >
              <div className="overlay group-hover:block hidden w-full h-full bg-black/50 absolute top-0 rounded-[20px] left-0 z-10"></div>
              <div className="w-full h-full group-hover:flex hidden absolute top-0 left-0 justify-center z-20 items-center">
                <div className=" flex justify-center  flex-col gap-3 text-white text-center items-center">
                    <h3 className="font-mono md:text-2xl text-lg sm:text-xl">
                      Homes with Heart
                    </h3>
                    <p className="md:text-base text-xs sm:text-sm">
                      From cozy apartments to expansive villas, we create living
                      spaces that resonate with warmth and personality. Our
                      designs focus on optimizing space while ensuring comfort
                      and style.
                    </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
