import React from "react";
import Carousel from "../components/Carousel";
import ServicesComp from "../components/Services";

const Services = () => {
  return (
    <div>
      <Carousel />
      <ServicesComp isServicePage={true} />
    </div>
  );
};

export default Services;
