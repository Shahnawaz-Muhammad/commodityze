import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import Link from "next/link";

export default function App() {
  const carouselData = [
    {
      id: 1,
      imgUrl: "bg-carousel1",
      title: "Commodityze",
      // description: "Leading the path in mineral and energy resources brokerage",
      description: "Welcome to Commodityze, your trusted partner in international trade. As a leading player in the global market, we specialize in the facilitation and optimization of trade transactions for a wide range of commodities. With our extensive expertise, industry knowledge, and expansive network, we ensure seamless and profitable transactions for our clients worldwide.",
      subDescription: "At Commodityze, we deal with a diverse portfolio of commodities, including cement, lithium, iron, gold, marble, phosphate, oil, and zinc. Our dedicated team of international trade specialists works tirelessly to connect buyers and sellers, enabling them to seize lucrative opportunities and unlock the full potential of their commodities.",
    },
    {
      id: 2,
      imgUrl: "bg-carousel2",
      title: "Commodityze",
      description: "Welcome to Commodityze, your trusted partner in international trade. As a leading player in the global market, we specialize in the facilitation and optimization of trade transactions for a wide range of commodities. With our extensive expertise, industry knowledge, and expansive network, we ensure seamless and profitable transactions for our clients worldwide.",
      subDescription: "At Commodityze, we deal with a diverse portfolio of commodities, including cement, lithium, iron, gold, marble, phosphate, oil, and zinc. Our dedicated team of international trade specialists works tirelessly to connect buyers and sellers, enabling them to seize lucrative opportunities and unlock the full potential of their commodities.",
      // description: "Leading the path in mineral and energy resources brokerage",

    },
    {
      id: 3,
      imgUrl: "bg-carousel3",
      title: "Commodityze",
      description: "Welcome to Commodityze, your trusted partner in international trade. As a leading player in the global market, we specialize in the facilitation and optimization of trade transactions for a wide range of commodities. With our extensive expertise, industry knowledge, and expansive network, we ensure seamless and profitable transactions for our clients worldwide.",
      subDescription: "At Commodityze, we deal with a diverse portfolio of commodities, including cement, lithium, iron, gold, marble, phosphate, oil, and zinc. Our dedicated team of international trade specialists works tirelessly to connect buyers and sellers, enabling them to seize lucrative opportunities and unlock the full potential of their commodities.",
      // description: "Leading the path in mineral and energy resources brokerage",

    },
    {
      id: 4,
      imgUrl: "bg-carousel4",
      title: "Commodityze",
      description: "Welcome to Commodityze, your trusted partner in international trade. As a leading player in the global market, we specialize in the facilitation and optimization of trade transactions for a wide range of commodities. With our extensive expertise, industry knowledge, and expansive network, we ensure seamless and profitable transactions for our clients worldwide.",
      subDescription: "At Commodityze, we deal with a diverse portfolio of commodities, including cement, lithium, iron, gold, marble, phosphate, oil, and zinc. Our dedicated team of international trade specialists works tirelessly to connect buyers and sellers, enabling them to seize lucrative opportunities and unlock the full potential of their commodities.",
      // description: "Leading the path in mineral and energy resources brokerage",

    },
  ];

  return (
    <>
      <div
        className={`${carouselData.at(0).imgUrl} bg-cover bg-no-repeat bg-center bg-blend-darken flex justify-center items-center flex-col h-[90vh]  bg-black bg-opacity-60 height-sm`}
      >
        <h1 className="text-2xl md:text-5xl font-bold text-white carousel-content-top-sm">
          {carouselData.at(0).title}
        </h1>
        <p className="text-white text-lg md:text-xl px-30 text-center py-3 content-align">{carouselData.at(0).description}</p>
        <p className="text-white text-lg md:text-xl px-5 text-center py-3 content-align">{carouselData.at(0).subDescription}</p>
        <div className="flex justify-center my-7 carousel-content-bottom-sm">
          <Link href="#contact" className="border border-secondary  rounded-md px-10 py-2 text-lg hover:px-12 ease-in-out duration-200 text-white uppercase">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
