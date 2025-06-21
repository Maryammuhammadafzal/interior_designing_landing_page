import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex w-full h-auto justify-center items-center">
      <div className="flex flex-col gap-6 w-[90%] max-w-7xl py-10 h-auto">
        <div className="headings py-4">
          <h4 className="font-mono text-4xl text-secondary">who we are</h4>
          <div className="w-full h-auto py-2 relative flex">
            <h2 className="text-primary max-w-xl leading-20 md:text-6xl text-5xl font-sans font-bold">
              Designers of Dreamscapes
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

        <div className="xl:w-[95%] w-full mx-auto h-auto py-4 flex md:flex-row flex-col">
          <div
            className="md:w-1/2 w-full h-auto max-md:h-[30vh] bg-cover bg-center"
            style={{ backgroundImage: `url('/images/about-image.jpg')` }}
          ></div>
          <div className=" w-full md:w-1/2 h-full text-primary bg-[#CDBF95]/30 flex flex-col gap-10 py-8 px-5 xl:px-10">
          <h3 className="xl:text-[88px] sm:text-7xl max-xs:text-5xl text-6xl font-mono ">
                who we are
          </h3>

          <p className="xl:text-xl sm:text-lg text-base max-xs:text-sm font-sans">At [Your Company Name], we believe every space has a story to tell. Our mission is to transform your interiors into breathtaking environments that reflect your style, needs, and aspirations. With years of expertise in design innovation, we cater to both residential and commercial projects, blending functionality with unmatched aesthetics. Whether you seek minimalist elegance or luxurious grandeur, we bring your vision to life.</p>
         <Link href='/' className="flex flex-col text-center w-fit gap-1 italic">Read more <span>
                <Image
                src="/images/line3.png"
                alt="line"
                width={100}
                height={100}
              />  </span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
