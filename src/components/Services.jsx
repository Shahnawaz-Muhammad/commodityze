import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MoreDetails from '../components/DetailedAboutUs'

const Services = ({ isServicePage }) => {
  const route = useRouter();

  const home = route.pathname === "/";
  const services = [
    {
      id: 2,
      title: "Lithium ",
      imgUrl: "/images/lithium1.png",
      description:
        "With the escalating demand for lithium as a crucial element in rechargeable batteries, we possess the necessary connections to procure and deliver lithium, ensuring that your business needs are met.",
    },
    {
      id: 1,
      title: "Cement ",
      imgUrl: "/images/cement.png",
      description:
        "Our firm has the capability to procure and transport cement of different grades from various parts of the globe, serving as the fundamental building material for any construction endeavor.",
    },
    {
      id: 3,
      title: "Gold  ",
      imgUrl: "/images/raw-gold.png",

      description:
        "Gold, an enduring investment, remains valuable for both manufacturing and investment endeavors. Our services guarantee your access to global gold resources, catering to your specific requirements.",
    },
    {
      id: 4,
      title: "Iron  ",
      imgUrl: "/images/iron.jpg",
      description:
        "Benefiting from extensive expertise in the iron trade, we are well-equipped to provide your business with this indispensable commodity for a multitude of applications.",
    },
    {
      id: 5,
      title: "Phosphates  ",
      imgUrl: "/images/phosphate.png",
      description:
        "Phosphates play a crucial role in agriculture and industry. Our expertise lies in connecting buyers and sellers to fulfill the worldwide demand for this essential resource.",
    },

    {
      id: 6,
      title: "Marble  ",
      imgUrl: "/images/marble.png",

      description:
        "Marble epitomizes sophistication and refinement. Our capability extends to sourcing top-notch marble from various parts of the world, ensuring high quality for your projects while reflecting elegance and style.",
    },
    {
      id: 7,
      title: "Oil",
      imgUrl: "/images/oil.png",
      description:
        "Oil remains an indispensable energy resource, and our extensive network guarantees a consistent supply to fulfill your specific demands  as oil continues to be an essential resource.",
    },
    {
      id: 8,
      title: "Zinc",
      imgUrl: "/images/zinc.png",
      description:
        "Zinc holds immense significance as a vital component across various industries, ranging from construction to manufacturing. Rest assured, we possess the capability to source and supply zinc according to your specific requirements.",
    },
  ];
  return (
    <>
      <div
        id="services"
        className="relative overflow-hidden flex justify-center  items-center bg-white py-8 border-b-2"
      >
        <div className="max-w-[1240px] w-full mx-5">
          <div className="py-5 text-center">
            <h2 className="lg:text-4xl lg:text-blue lg:font-bold  lg:text-center text-3xl text-blue font-semibold  text-center ">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-3 my-5">
            {services.map((service, index) => {
              if (!isServicePage && index > 3) return;
              return (
                <div key={service.id} className="border border-gray-200 shadow-md shadow-gray-300  rounded-lg flex flex-col justify-start items-center lg:max-w-[18rem]">
                  <div className="relative w-100 max-h-[10rem] overflow-hidden bg-contain my-2 ">
                    <img src={service.imgUrl} alt="" className="h-[4rem]" />
                  </div>
                  <div>
                    <h1 className="text-center font-lg font-semibold my-2">
                      {service.title}
                    </h1>
                    <p className="px-3 py-2 text-start text-gray-700">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
            {/* {isServicePage && (
              <MoreDetails />
            )} */}
          <div className="flex justify-center py-5">
            <Link
              href={`${home ? "/products" : "/"} `}
              className="bg-black hover:bg-opacity-80 rounded-md px-10 py-2 text-xl text-white"
            >
              {home ? "Explore More" : "Go Back"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
