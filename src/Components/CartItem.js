import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useCartContext } from "../Context/CartContext";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmtToggle from "./CartAmtToggle";

function CartItem({ id, name, image, color, price, amount }) {
  const { removeItem, setIncrease, setDecrease } = useCartContext();

  return (
    <div className='grid grid-cols-3 sm:grid-cols-5 justify-evenly my-4'>
      {/* Item */}
      <div className='sm:grid sm:grid-cols-2 sm:mx-auto overflow-hidden ml-2'>
        <figure className='h-[4rem] sm:h-[2.5rem] sm:w-[3rem] sm:mx-auto w-[5rem] rounded-md overflow-hidden'>
          <img
            src={image}
            alt={name}
            className=' h-[4rem] sm:h-[2.5rem] sm:w-[3rem] sm:mx-auto w-[5rem] rounded-md overflow-hidden'
          />
        </figure>
        <div className='ml-2 sm:ml-2 overflow-hidden'>
          <p className='font-semibold sm:text-xs'>{name}</p>
          <p className='sm:text-xs mt-[5px]'>
            color &nbsp;
            <span
              style={{ backgroundColor: color, color: color }}
              className='rounded-full px-[7px] sm:px-[8px] text-[10px] sm:text-[12px]'
            ></span>
          </p>
        </div>
      </div>

      {/* Price */}
      <div className='hidden sm:inline sm:mx-auto text-[1.2rem]'>
        <FormatPrice price={price} />
      </div>

      <div className='sm:mt-[-1rem]'>
        <CartAmtToggle
          amount={amount}
          setDec={() => setDecrease(id)}
          setInc={() => setIncrease(id)}
        />
      </div>

      {/* Sub Total */}
      <div className='hidden sm:inline sm:mx-auto text-[1.2rem]'>
        <FormatPrice price={price * amount} />
      </div>

      {/* Remove */}
      <div className='sm:mx-auto'>
        <button
          type='button'
          className='mt-5 ml-6 sm:mt-1'
          onClick={() => removeItem(id)}
        >
          <AiFillDelete className='text-red-600 text-2xl' />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
