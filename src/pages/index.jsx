import { Inter } from "@next/font/google";
import Carousel from "../components/Carousel"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import About from "../components/About"
import WhyUs from "../components/WhyUs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Carousel />
      <Services isServicePage={false}/>
      <Testimonials />
      <About />
      <WhyUs />
      <Contact />
    </>
  );
}
