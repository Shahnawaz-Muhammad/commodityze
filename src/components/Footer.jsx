import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faHome,
  faPhone,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../public/images/favicon1.png";

const Footer = () => {
  return (
    <div className="lg:flex lg:justify-between w-[100vw] bg-white px-[1rem] md:px-[5em] py-10">
      <div className="w-100 lg:w-[25%]">
        <h1 className="w-full text-3xl font-bold text-black">
          <Image src={Logo} className="w-[3rem]" alt="commodityze logo" />
        </h1>
      </div>
      <div className="w-[50%] md:w-[100%] lg:w-[25%] w-100 p-2">
        <Link href="/" className=" lg:flex lg:my-5   flex my-5 text-grey3">
          <FontAwesomeIcon icon={faHome} width={20} className="text-black" />
          <h3 className="  ml-3 font-medium text-black">
            Home
          </h3>
        </Link>
        <Link
          href="#services"
          className=" lg:flex lg:my-5  flex my-5 text-grey3"
        >
          <FontAwesomeIcon
            icon={faWrench}
            width={20}
            className="text-black"
          />
          <h3 className="   ml-3 font-medium text-black">
            Services
          </h3>
        </Link>
        <Link
          href="#about"
          className=" lg:flex lg:my-5  flex my-5 text-grey3"
        >
          <FontAwesomeIcon
            icon={faAddressCard}
            width={20}
            className="text-black"
          />
          <h3 className="   ml-3 font-medium text-black">
            About Us
          </h3>
        </Link>
        <Link
          href="#contact"
          className=" lg:flex lg:my-5  flex my-5 text-grey3"
        >
          <FontAwesomeIcon icon={faPhone} width={20} className="text-black" />
          <h3 className="   ml-3 font-medium text-black">
            Contact Us
          </h3>
        </Link>
      </div>
      <div className=" md:w-[100%] lg:w-[25%] w-[100vw] p-2">
        <div className="lg:leading-5 leading-7">
          <Link href="/disclaimer">
            <h3 className="hover:underline  font-medium lg:my-5 text-black">
              Disclaimer
            </h3>
          </Link>
          <Link href="/privacy-policy">
            <h3 className="hover:underline  font-medium lg:my-5 text-black">
              Privacy Policy
            </h3>
          </Link>
          <Link href="/terms-and-conditions">
            <h3 className="hover:underline  font-medium lg:my-5 text-black">
              Terms & Conditions
            </h3>
          </Link>
        </div>
      </div>
      <div className="w-[50%] md:w-[30%] lg:w-[25%] py-2 lg:px-6  ">
        <h2 className="font-semibold text-blue text-[1.4rem]">Follow Us</h2>
        <div className="flex flex-row justify-between sm:w-[70%] md:w-[100%] my-3">
          <Link href="#" target="_blank" className="cursor-pointer">
            <FontAwesomeIcon icon={faFacebook} width={30} />
          </Link>
          <Link href="#" target="_blank" className="cursor-pointer">
            <FontAwesomeIcon icon={faTwitter} width={30} />
          </Link>
          <Link href="#" target="_blank" className="cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} width={30} />
          </Link>
          <Link href="#" target="_blank" className="cursor-pointer">
            <FontAwesomeIcon icon={faLinkedin} width={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
