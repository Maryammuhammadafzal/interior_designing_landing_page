"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
// import image from ''

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image: "/images/portfolio-image1.jpg",
    title: "Custom Furniture & Decor",
    description:
      "Our team collaborates with skilled artisans to craft bespoke furniture and decor pieces that perfectly complement your interiors.",
  },
  {
    id: 2,
    image: "/images/portfolio-image2.jpg",
    title: "Modern Interior Design",
    description:
      "Transform your space with our innovative interior design solutions tailored to your style.",
  },
  {
    id: 3,
    image: "/images/portfolio-image3.jpg",
    title: "Luxury Home Styling",
    description:
      "Elevate your home with luxurious styling and premium materials curated by our experts.",
  },
  {
    id: 4,
    image: "/images/portfolio-image4.jpg",
    title: "Functional Art Pieces",
    description:
      "Unique, functional art pieces designed to add character and utility to your spaces.",
  },
  {
    id: 5,
    image: "/images/portfolio-image5.jpg",
    title: "Eco-Friendly Designs",
    description:
      "Sustainable and eco-friendly designs that prioritize both aesthetics and the environment.",
  },
  {
    id: 6,
    image: "/images/portfolio-image6.jpg",
    title: "Minimalist Decor",
    description:
      "Sleek and minimalist decor solutions for a modern, clutter-free living space.",
  },
];

const PortfolioPage = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
            <span className="absolute -bottom-4 md:bottom-10 md:left-[40%] lg:left-[30%] xl:left-[20%] mx-3">
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

           <div id="features" className="xl:w-[95%] overflow-hidden w-full h-[500px] flex py-4 mx-auto">
      <Slider {...settings} className="flex mx-auto flex-row gap-3">
        {slides.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="w-[330px] h-[460px] mx-auto relative group font-sans"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-[20px]"
            />
            <div className="overlay group-hover:block hidden w-full h-full bg-black/50 absolute top-0 rounded-[20px] left-0 z-10" />
            <div className="w-full h-full group-hover:flex hidden absolute top-0 left-0 justify-center items-center z-20">
              <div className="flex flex-col gap-3 text-white text-center items-center px-4">
                <div className="h-[40px] w-[40px] text-white rounded-full flex justify-center items-center border border-white">
                  <ArrowUpRight size={24} />
                </div>
                <h3 className="font-mono md:text-2xl text-lg sm:text-xl">
                  {title}
                </h3>
                <p className="md:text-base text-xs sm:text-sm">{description}</p>
                <Image
                  src="/images/line4.png"
                  alt="decorative line"
                  width={150}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
