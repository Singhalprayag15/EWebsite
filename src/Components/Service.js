import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";

function Service() {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-3 w-[80%] mx-auto text-center'>
        <div className='p-4 border-2 duration-500 border-[#232F3E] hover:text-white hover:bg-[#232F3E] my-1 grid justify-center align-middle sm:h-[25vh]'>
          <FaShippingFast className='mx-auto text-[2rem]' />
          <span className='text-2xl font-semibold'>Free Shipping</span>
        </div>
        <div className='grid grid-rows-2 sm:h-[30vh]'>
          <div className='my-1 sm:my-0 p-4 border-2 duration-500 border-[#232F3E] hover:text-white hover:bg-[#232F3E] grid justify-center align-middle'>
            <RiArrowLeftRightLine className='mx-auto text-[2rem]' />
            <span className='text-xl font-semibold'>14-days Return</span>
          </div>
          <div className=' my-1 sm:my-0 p-4 border-2 duration-500 border-[#232F3E] hover:text-white hover:bg-[#232F3E] grid justify-center align-middle'>
            <FiPhoneCall className='mx-auto text-[2rem]' />
            <span className='text-xl font-semibold'>24/7 Support</span>
          </div>
        </div>
        <div className='my-1 p-4 border-2 duration-500 border-[#232F3E] hover:text-white hover:bg-[#232F3E] grid justify-center align-middle sm:h-[25vh]'>
          <BsCheckLg className='mx-auto text-[2rem]' />
          <span className='text-2xl font-semibold'>Quality Product</span>
        </div>
      </div>
    </>
  );
}

export default Service;
