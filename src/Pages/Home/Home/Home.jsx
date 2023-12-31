import React from "react";
import Members from "../../../components/Members/Members";
import Feature from "../../../components/Feature/Feature";
import LatestBlog from "../../../components/LatestBlog/LatestBlog";
import Service from "../../../components/Service/Service";
import About from "../About/About";
import Promo from "../Appoinment-promo/Promo";
import Appoinment from "../Appoinment/Appoinment";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Slick from "../Slick/Slick";
import Testimonial from "../Testimonial/Testimonial";
import Documents from "../../../components/Documents/PDFViewer";

const Home = () => {
  return (
    <>
      <Banner />
      <Testimonial />
      <Feature />
      <Members />
      <Slick />
      <Documents />

    </>
  );
};

export default Home;
