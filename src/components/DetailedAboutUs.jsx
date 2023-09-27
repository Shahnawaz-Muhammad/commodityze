import React from "react";
import Image from "next/image";
import about from "../../public/images/mineral.png";

const DetailedAboutUs = () => {
  return (
    <>
      <div id="about" className="relative overflow-hidden flex justify-center items-center py-10 bg-primary">
        <div className="max-w-[1240px] w-full mx-auto">
          <h2 className="lg:text-4xl lg:text-blue lg:font-bold  lg:text-center text-3xl text-blue font-semibold  text-center ">
            About Us
          </h2>
          <div className=" flex mt-[2rem]  text-center h-auto">
            <div className="flex flex-col-reverse md:flex-row md:justify-between gap-5">

              <div className="w-100 mx-auto md:w-[50%] flex flex-col justify-center items-center">
                <div className="lg:text-[2.7rem] lg:leading-[2.7rem] lg:font-[600] lg:text-blue text-2xl tracking-wide font-semibold text-blue w-full">
                  <h2 className="">Commodityze</h2>
                </div>
                <div className="text-grey3 text-lg mt-5 tracking-wide lg:leading-[1.5rem] text-md px-10">
                  <p>
                    Welcome to Commodity, your trusted partner in international trade. As a leading player in the global market, we specialize in the facilitation and optimization of trade transactions for a wide range of commodities. With our extensive expertise, industry knowledge, and expansive network, we ensure seamless and profitable transactions for our clients worldwide.
                  </p>
                </div>
                <div className="text-grey3 text-lg mt-5 tracking-wide lg:leading-[1.5rem] text-md px-10">
                At Commodity, we deal with a diverse portfolio of commodities, including cement, lithium, iron, gold, marble, phosphate, oil, and zinc. Our dedicated team of international trade specialists works tirelessly to connect buyers and sellers, enabling them to seize lucrative opportunities and unlock the full potential of their commodities.
                </div>
              </div>
              <div className="w-100 md:w-[45%] flex justify-center items-center">
                <Image className="w-[80%] md:w-100 " src={about} alt="about image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedAboutUs;
