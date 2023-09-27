import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../public/images/logo-black.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  const handleMobNav = (item) => {
    router.push(item);
    setNav(false);
  };

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className={`   mx-auto w-[100vw] flex justify-center bg-white h-24`}>
      <div className="flex justify-between items-center  max-w-[1240px] mx-5 w-[100%]">
        <div className="w-full text-3xl font-bold text-white">
          <Link href="/">
            <Image src={Logo} className="w-[3.5rem]" alt="commodityze logo"/>
          </Link>{" "}
        </div>
        <ul className="hidden md:flex  font-semibold">
          <li className="p-4 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link href="#services">Services</Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link href="#about">About</Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-black w-7 h-7 cursor-pointer"
          />
        </div>
        <div
          className={`${
            nav
              ? "fixed h-screen left-0 top-0 w-full  bg-[#fff] ease-in-out duration-300 "
              : "fixed top-[-100%] w-full left-0 ease-in-out duration-300"
          } md:hidden block z-50`}
        >
          <div className="flex flex-row justify-between items-center px-3">
            <div className="w-full text-2xl font-bold text-black m-6">
              <button onClick={() => handleMobNav("/")}>
                <Image src={Logo} className="w-[2rem]" alt="commodityze logo"/>
              </button>
            </div>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={handleNav}
              className="text-black w-7 h-7 cursor-pointer"
            />
          </div>
          <ul className="uppercase p-4 ">
            <li className="p-4 border-b border-primary">
              <button onClick={() => handleMobNav("/")}>Home</button>
            </li>
            <li className="p-4 border-b border-primary">
              <button onClick={() => handleMobNav("#services")}>
                Services
              </button>
            </li>
            <li className="p-4 border-b border-primary">
              <button onClick={() => handleMobNav("#about")}>About</button>
            </li>
            <li className="p-4  border-primary">
              <button onClick={() => handleMobNav("#contact")}>Contact</button>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
