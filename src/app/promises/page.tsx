import React from "react";
import Image from "next/image";
const PromisePage = () => {
  return (
    <div className="flex w-full h-auto justify-center items-center">
      <div className="flex flex-col gap-10 w-[90%] max-w-7xl py-10 h-auto">
        <div className="headings py-4">
          <h4 className="font-mono text-4xl text-secondary">Our Promise</h4>
          <div className="w-full h-auto py-2 relative flex">
            <h2 className="text-primary max-w-xl sm:leading-16 md:leading-20 md:text-6xl text-5xl font-sans font-bold">
              Why We Stand Out
            </h2>
            <span className="absolute -bottom-4 md:bottom-10 md:left-[15%] lg:right-[10%] xl:left-[10%] mx-3">
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
            <div className="flex flex-col gap-0 text-center w-[250px] h-[160px] justify-center items-center p-1">
              <div className="icon py-2">
                <Image
                  src="/images/icon1.png"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <h5 className="text-4xl lowercase font-mono text-secondary">
                Creative Brilliance
              </h5>
              <p className="text-base text-primary">
                Innovative ideas that set your space apart.
              </p>
            </div>
            <div className="flex flex-col gap-0 text-center w-[250px] h-[160px] justify-center items-center p-1">
              <div className="icon py-2">
                <Image
                  src="/images/icon2.png"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <h5 className="text-4xl lowercase font-mono text-secondary">
                Impeccable Detailing
              </h5>
              <p className="text-base text-primary">
                Innovative ideas that set your space apart.
              </p>
            </div>
            <div className="flex flex-col gap-0 text-center w-[250px] h-[160px] justify-center items-center p-1">
              <div className="icon py-2">
                <Image
                  src="/images/icon3.png"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <h5 className="text-4xl lowercase font-mono text-secondary">
                Green Innovations
              </h5>
              <p className="text-base text-primary">
                Innovative ideas that set your space apart.
              </p>
            </div>
            <div className="flex flex-col gap-0 text-center w-[250px] h-[160px] justify-center items-center p-1">
              <div className="icon py-2">
                <Image
                  src="/images/icon4.png"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
              <h5 className="text-4xl lowercase font-mono text-secondary">
                Personalized Touch
              </h5>
              <p className="text-base text-primary">
                Innovative ideas that set your space apart.
              </p>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromisePage;
