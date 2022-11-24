import React from "react";
import { NavLink } from "react-router-dom";

function HeroSection(props) {
  return (
    <>
      <div className={`hero_bg  ${props.img2} relative ${props.img1}`}>
        <div className='bg-[#000000a2] h-[100vh] w-[100vw] text-white absolute '>
          <div className='grid justify-center align-middle text-center mt-[15rem]'>
            <h2 className='tracking-widest uppercase logo_name'>
              Hello & Wellcome
            </h2>
            <p className='my-[3rem] tracking-widest text-[2.5rem] uppercase logo_name lg:text-[3.5rem]'>
              {props.title}
            </p>

            <NavLink to='/about'>
              <button
                className='uppercase tracking-widest logo_name border-[1px] p-2 border-white w-[12rem] m-auto hover:bg-white hover:text-black duration-700'
                type='button'
              >
                Learn More
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
