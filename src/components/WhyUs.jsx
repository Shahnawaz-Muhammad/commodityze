import React from "react";
import Image from "next/image";
import whyus from "../../public/images/why-us.jpg";

const WhyUs = () => {
  return (
    <>
      <div className="relative overflow-hidden flex justify-center items-center py-20 bg-primary text-black">
        <div className="max-w-[1240px] w-full mx-auto">
          <h2 className="lg:text-4xl lg:text-blue lg:font-bold  lg:text-center text-3xl text-blue font-semibold  text-center ">
          Why Choose Us?
          </h2>
          <div className=" flex mt-[2rem]  text-center h-auto">
            <div className="flex flex-col-reverse md:flex-row md:justify-between gap-5">
              <div className="w-100 md:w-[50%] flex justify-center items-center">
                <Image className="w-[80%] md:w-100 " src={whyus} alt="why us image" />
              </div>
              <div className="w-100 mx-auto md:w-[50%] flex flex-col justify-center items-center">
                <div className="lg:text-[2.7rem] lg:leading-[2.7rem] lg:font-[600] lg:text-blue text-2xl tracking-wide font-semibold text-blue w-full">
                  {/* <h2 className="text-4xl">Unmatched Excellence</h2> */}
                </div>
                <div className="text-grey3 text-lg mt-5 tracking-wide lg:leading-[1.5rem] text-md px-10">
                  <p>
                    Our commitment to excellence, our deep understanding of the
                    market dynamics, our extensive network, and our drive to
                    meet and exceed client expectations make us the perfect
                    partner for your resource needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
