import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import b1 from "../../public/images/vic.webp";
import b2 from "../../public/images/Zehra.webp";
import b3 from "../../public/images/indra1.webp";
import b4 from "../../public/images/Aalex.webp";

const Response = () => {
  const [wwow, setWwow] = useState(false);

  const Hit = () => {
    if (window.scrollY >= 3580) {
      setWwow(true);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", Hit);
  }

  return (
    <div id='testimonials' className="md:px-[3rem] px-[1rem] bg-primary py-[5rem]">
      <div>
        <h2 className="lg:text-4xl text-black lg:font-bold  lg:text-center text-3xl  font-semibold  text-center ">
          Testimonials
        </h2>
      </div>
      <div className=" flex mt-[2rem]  text-center h-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2000,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border rounded-xl border-gray-900 py-4 my-10   flex justify-center items-center flex-col">
              <Image
                className="lg:rounded-full lg:w-[5rem] lg:h-[5rem]  rounded-full w-[5rem] h-[5rem] "
                src={b1}
                alt="testimonial image"
              />

              <h2 className=" lg:text-lg lg:font-bold lg:my-4 text-black text-lg font-bold my-4">
                Vic Devore
              </h2>
              <p className="md:h-[40%] lg:h-[7rem] text-justify px-3 text-black">
                Wish I would have worked with him from the beginning! Super easy
                to work with this seller. He was happy to go over the work and
                implement my feedback.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-xl border-gray-900 py-4 my-10   flex justify-center items-center flex-col">
              <Image
                className=" rounded-full w-[5rem] h-[5rem] "
                src={b2}
                alt="testimonial image"
              />

              <h2 className=" lg:text-lg lg:font-bold lg:my-4 text-black text-lg font-bold my-4">
                Zehra Taqvi
              </h2>
              <p className="md:h-[40%] lg:h-[7rem] text-justify px-3 text-black">
                A reliable seller who takes the clients wishes into
                consideration. He was happy to go over the work and implement my
                feedback. I am very happy with his work.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-xl border-gray-900 py-4 my-10   flex justify-center items-center flex-col">
              <Image
                className="rounded-full w-[5rem] h-[5rem] "
                src={b3}
                alt="testimonial image"
              />
              {/* </div> */}
              <h2 className=" lg:text-lg lg:font-bold lg:my-4 text-black text-lg font-bold my-4">
                Jess Indra
              </h2>
              <p className="md:h-[40%] lg:h-[7rem] text-justify px-3 text-black">
                Seller is amazing, He’s great at communicating. Definitely using
                for all future projects. He was happy to go over the work and
                implement my feedback.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-xl border-gray-900 py-4 my-10   flex justify-center items-center flex-col">
              <Image
                className="lg:rounded-full lg:w-[5rem] lg:h-[5rem]  rounded-full w-[5rem] h-[5rem] "
                src={b4}
                alt="testimonial image"
              />

              <h2 className=" lg:text-lg lg:font-bold lg:my-4 text-black text-lg font-bold my-4">
                Aalex Costana
              </h2>
              <p className="md:h-[40%] lg:h-[7rem] text-justify px-3 text-black">
                I love working with Solver's Cave. They are super talented and
                easy to communicate with. It was happy to go over the work and
                implement my feedback.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Response;
