import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="footer w-[95%] font-sans mx-auto xl:h-screen h-[50vh] rounded-3xl flex justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url('/images/footer-image.jpg')` }}
    >
      <div className="overlay w-full h-full bg-black/20 absolute top-0 rounded-[20px] left-0 z-10"></div>
      <div className="w-full h-full absolute top-0 left-0 flex justify-center z-20 items-center">
        <div className="lg:w-[90%] w-[95%] h-full flex justify-start py-5 items-center">
          <div className="w-full h-auto flex flex-col gap-4 items-center relative">
            <h1 className=" lg:max-w-3xl lg:text-6xl xs:text-4xl max-sm:leading-16 leading-20 text-3xl md:text-5xl sm:text-5xl  md:max-w-xl text-white uppercase font-bold font-sans">
            Let’s Craft Your Vision Together
            </h1>
            <p className="text-xl">Are you ready to transform your space? Contact us today to schedule a consultation and take the first step toward a beautifully designed future.</p>
            <Link href='/' className="font-bold text-3xl">Let’s Connect</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
