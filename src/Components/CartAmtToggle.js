import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function CartAmtToggle({ amount, setDec, setInc }) {
  return (
    <>
      <div className='mt-4'>
        <div className='grid grid-cols-3 text-[1.5rem] w-[7rem] justify-evenly ml-[1rem]'>
          <button onClick={() => setDec()}>
            <AiOutlineMinusCircle />
          </button>
          <p className=''>{amount}</p>
          <button onClick={() => setInc()}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  );
}

export default CartAmtToggle;
