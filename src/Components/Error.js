import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <>
      <div className='text-center mt-[8rem] sm:mt-[12rem]'>
        <h1 className='text-[6rem] text_font'>404</h1>
        <h2 className='text-[3rem] text_font'>UH OH! YOU ARE LOST </h2>
        <p className='mt-4 mx-8 text-lg'>
          The page you are looking for does not exit.How you get here is a
          mystery.But you can click the button below to go back to Home page.
        </p>
        <button
          className='bg-[#131A22] text-white py-[.35rem] px-14 border-2 border-[#131A22] rounded-sm mt-[2rem] duration-700 hover:bg-white hover:text-[#131A22] font-bold text-md'
          type='button'
        >
          <NavLink to='/'>Home</NavLink>
        </button>
      </div>
    </>
  );
}

export default Error;
