import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  return (
    <div className="flex w-full h-auto justify-center items-center">
      <div className="flex flex-col gap-6 w-[90%] max-w-7xl py-10 h-auto">
        <div className="headings py-4">
          <h4 className="font-mono text-4xl text-secondary">our services</h4>
          <div className="w-full h-auto py-2 relative flex">
            <h2 className="text-primary max-w-xl leading-20 md:text-6xl text-5xl font-sans font-bold">
              Unveiling Our Expertise
            </h2>
            <span className="absolute -bottom-10 md:bottom-20 md:right-[5%] lg:right-[10%] xl:right-[30%] mx-3">
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

        <div className="xl:w-[95%] w-full mx-auto h-auto py-4 gap-5 flex flex-col">
          <div className="navigation w-full flex justify-center items-center">
                <button className="rounded-lg active:bg-[#C89C65] active:text-white"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
