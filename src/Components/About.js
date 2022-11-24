import React from "react";
import HeroSection from "./HeroSection";
import StoryJourney from "./StoryJourney";
import img1 from "../Images/story.jpg";
import img2 from "../Images/journey.jpg";
import Service from "./Service";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className=''>
        <HeroSection
          img1={`md:bg-[url("./Images/ab2.gif")]`}
          img2={`bg-[url("./Images/ab1.gif")]`}
          title=' About Us'
        />
        <StoryJourney
          title='OUR STORY'
          img={img1}
          order1='order-1'
          order2='order-2'
        />
        <div className='bg-[#131A22] text-white py-4'>
          <StoryJourney
            title='JOURNEY START FROM'
            img={img2}
            order1='order-2'
            order2='order-1'
          />
        </div>
        <div className='my-[5rem]'>
          <Service />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
