import React from "react";
import Image from "next/image";
const TestimonialPage = () => {
  return (
    <div className="flex w-full h-auto justify-center items-center">
      <div className="flex flex-col gap-10 w-[90%] max-w-7xl py-10 h-auto">
        <div className="headings py-4">
          <h4 className="font-mono text-4xl lowercase text-secondary">
            Testimonials
          </h4>
<div className="w-full h-auto py-2 relative flex">
            <h2 className="text-primary max-w-xl leading-20 md:text-6xl text-5xl font-sans font-bold">
             Words That Inspire Us
            </h2>
            <span className="absolute -bottom-10 md:bottom-12 md:right-[10%] lg:right-[20%] xl:right-[40%] mx-3">
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
            <div className="flex flex-col gap-3 text-center w-[330px] h-[250px] justify-between items-center p-1">
              <div className="icon py-2">
                <Image
                  src="/images/quote-icon.png"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-lg font-thin text-primary">
                “Working with [Your Company Name] was an absolute pleasure. They
                understood my vision and exceeded my expectations!”
              </p>
              <h5 className="text-4xl lowercase font-mono text-secondary">
                [client name]
              </h5>
            </div>
            <div className="flex flex-col gap-3 text-center w-[330px] h-[250px] justify-between items-center p-1">
              <div className="icon py-2">
                <Image
                  src="/images/quote-icon.png"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-lg font-thin text-primary">
                Innovative ideas that set your space apart.“Their
                professionalism and attention to detail are unmatched. My office
                now feels like an extension of my brand.”
              </p>
                <h5 className="text-4xl lowercase font-mono text-secondary">
                [client name]
              </h5>
            </div>
            <div className="flex flex-col gap-3 text-center w-[330px] h-[250px] justify-between items-center p-1">
              <div className="icon py-2">
                <Image
                  src="/images/quote-icon.png"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-lg font-thin text-primary">
                “Working with [Your Company Name] was an absolute pleasure. They
                understood my vision and exceeded my expectations!”
              </p>
              <h5 className="text-4xl lowercase font-mono text-secondary">
                [client name]
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
