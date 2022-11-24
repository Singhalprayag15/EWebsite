import React from "react";
import HeroSection from "./HeroSection";
import Records from "./Records";
import Newproducts from "./Newproducts";
import Footer from "./Footer";
import Update from "./Update";
import Service from "./Service";
import FeaturedProducts from "./FeaturedProducts";

function Home() {
  return (
    <>
      <div className='bg-white pb-[5rem]'>
        <HeroSection
          img1={`md:bg-[url("./Images/ph1.gif")]`}
          img2={`bg-[url("./Images/lp1.gif")]`}
          title=' We are Vermes'
        />
        <FeaturedProducts />
      </div>
      <Records />
      <div className='pt-6 bg-white'>
        <Newproducts />
        <Update />
        <Service />
        <Footer />
      </div>
    </>
  );
}

export default Home;
