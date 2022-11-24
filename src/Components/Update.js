import React from "react";
import { NavLink } from "react-router-dom";

function Update() {
  return (
    <>
      <div className='bg-[#232F3E] text-center p-10 my-[5rem]'>
        <h1 className='text-white section-title sm:my-4'>
          <span className='text-2xl'>Stay Updated</span>
        </h1>
        <p className=' text-gray-400 my-4'>
          Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam
          labore at justo ipsum eirmod duo labore labore.
        </p>
        <form className='mb-2 mt-6'>
          <input
            type='email'
            placeholder='You Email'
            className='px-4 py-1 border-2 border-white'
          />
          <button
            type='submit'
            className='text-white border-2 border-white px-10 py-1 mt-4 duration-700 hover:text-[#232F3E] hover:bg-white hover:border-l-[#232F3E]'
          >
            <NavLink>Submit</NavLink>
          </button>
        </form>
      </div>
    </>
  );
}

export default Update;
