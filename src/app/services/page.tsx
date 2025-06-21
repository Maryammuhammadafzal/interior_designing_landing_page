import Image from "next/image";
import React from "react";

const ServicesPage = () => {
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

        <div className="xl:w-[95%] w-full mx-auto h-auto py-4 gap-8 flex flex-col">
          <div className="navigation hidden w-full md:flex flex-wrap h-auto gap-4 justify-evenly items-center">
            <button className="rounded-lg shrink-0 text-2xl lowercase relative focus:bg-[#C89C65] focus:text-white bg-transparent border border-[#C89C65] text-[#C89C65] py-3 px-10 font-mono group">
              Residential Design
              <span className="group-focus:block hidden absolute -bottom-4 left-[38%]">
                <Image
                  src="/images/vector.png"
                  alt="vector-image"
                  width={40}
                  height={40}
                />
              </span>{" "}
            </button>
            <button className="rounded-lg shrink-0 text-2xl lowercase relative focus:bg-[#C89C65] focus:text-white bg-transparent border border-[#C89C65] text-[#C89C65] py-3 px-10 font-mono group">
              Commercial Design
              <span className="group-focus:block hidden absolute -bottom-4 left-[38%]">
                <Image
                  src="/images/vector.png"
                  alt="vector-image"
                  width={40}
                  height={40}
                />
              </span>{" "}
            </button>
            <button className="rounded-lg shrink-0 text-2xl lowercase relative focus:bg-[#C89C65] focus:text-white bg-transparent border border-[#C89C65] text-[#C89C65] py-3 px-10 font-mono group">
              Custom Furniture
              <span className="group-focus:block hidden absolute -bottom-4 left-[38%]">
                <Image
                  src="/images/vector.png"
                  alt="vector-image"
                  width={40}
                  height={40}
                />
              </span>
            </button>
            <button className="rounded-lg shrink-0 text-2xl lowercase relative focus:bg-[#C89C65] focus:text-white bg-transparent border border-[#C89C65] text-[#C89C65] py-3 px-10 font-mono group">
              Space Optimization
              <span className="group-focus:block hidden absolute -bottom-4 left-[38%]">
                <Image
                  src="/images/vector.png"
                  alt="vector-image"
                  width={40}
                  height={40}
                />
              </span>{" "}
            </button>
          </div>
          <div
            className="w-full font-sans border-4 border-secondary mx-auto h-[579px] rounded-3xl flex justify-center items-center bg-cover bg-center relative"
            style={{ backgroundImage: `url('/images/service-image.jpg')` }}
          >
            <div className="overlay w-full h-full bg-black/50 absolute top-0 rounded-[20px] left-0 z-10"></div>
            <div className="w-full h-full absolute top-0 left-0 flex justify-center z-20 items-center">
              <div className="lg:w-[90%] w-[95%] h-full flex justify-center items-center">
                <div className="max-w-2xl h-auto flex text-center flex-col gap-3 items-center text-white relative">
                  <h3 className="font-mono md:text-6xl text-4xl sm:text-5xl">Homes with Heart</h3>
                  <p className="md:text-xl text-base sm:text-lg">
                    From cozy apartments to expansive villas, we create living
                    spaces that resonate with warmth and personality. Our
                    designs focus on optimizing space while ensuring comfort and
                    style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
