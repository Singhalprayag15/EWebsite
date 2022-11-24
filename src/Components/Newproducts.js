import React from "react";
import BestFeactures from "./BestFeactures";
import { TfiWallet, TfiCommentAlt } from "react-icons/tfi";
import { BsClockHistory } from "react-icons/bs";

function Newproducts() {
  return (
    <>
      <div className='mt-[6rem]'>
        <h1 className='text-center text-[2.5rem] font-semibold text_font'>
          Our best Features
        </h1>
        <p className='text-center mb-[3.5rem] text-lg'>
          Featured Product Just Arrived.
        </p>
        <div className='grid grid-cols-1 justify-evenly sm:grid-cols-2 lg:grid-cols-3 lg:mx-auto lg:w-[80vw]'>
          <BestFeactures
            icon={<TfiWallet />}
            title='Your Growth, Our Priority'
            content='We make everything user friendly so you can focus on growing your business.'
          />
          <BestFeactures
            icon={<BsClockHistory />}
            title='Transparent Workflow'
            content='We create transparent workflow. As a result, we help you understand your files, with simplicity.'
          />
          <BestFeactures
            icon={<TfiCommentAlt />}
            title='24 X 7 Support'
            content='Our friendly and knowledgeable staff are available 24×7 to answer your questions.'
          />
        </div>
      </div>
    </>
  );
}

export default Newproducts;
