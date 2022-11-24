import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import FormatPrice from "../Helpers/FormatPrice";
import CartItem from "./CartItem";
import Footer from "./Footer";

function Cart() {
  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();
  // console.log(cart);

  if (cart.length === 0) {
    return (
      <div className='flex items-center justify-center h-[100vh]'>
        <h2 className='text-[2rem] text_font '>No Item In Cart</h2>
      </div>
    );
  }

  return (
    <>
      <div className=''>
        <div className='bg-[#131A22] w-[100%] h-[7vh]'></div>
        <div className='grid grid-cols-3 sm:grid-cols-5 lg:w-[80%] lg:mt-[3rem] lg:mx-auto justify-evenly mx-4 my-4'>
          <p className='ml-4 sm:mx-auto'>Item</p>
          <p className=' hidden sm:inline sm:mx-auto'>Price</p>
          <p className='ml-3 sm:mx-auto'>Quantity</p>
          <p className=' hidden sm:inline sm:mx-auto'>Subtotal</p>
          <p className='ml-3 sm:mx-auto'>Remove</p>
        </div>
        <hr className='mx-4 lg:w-[80%] lg:mx-auto' />
        <div className='lg:w-[80%] lg:mx-auto'>
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr className='mx-4 lg:w-[80%] lg:mx-auto my-2' />
        <div className='mx-4 lg:w-[80%] lg:mx-auto flex flex-wrap justify-between my-6'>
          <NavLink to='/products'>
            <button
              type='button'
              className='bg-[#232F3E] text-white text-xs uppercase hover:scale-105 duration-500 py-2 font-semibold rounded-md hover:text-[#fabc5d] px-3 tracking-widest'
            >
              Continue Shopping
            </button>
          </NavLink>
          <button
            className='bg-[#e6301c] text-white text-xs uppercase hover:scale-105 duration-500 py-2 font-bold rounded-md px-3 tracking-widest'
            type='button'
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
        <div className='w-[15rem] sm:w-[20rem] sm:h-[10rem] lg:h-[12rem] lg:w-[25rem] mx-auto p-4 shadow-xl lg:my-[4rem] shadow-slate-500 rounded-md my-4'>
          <div className='flex flex-wrap justify-between sm:my-2'>
            <p className=''>Subtotal : </p>
            <p className='font-bold'>
              <FormatPrice price={total_amount} />
            </p>
          </div>
          <div className='flex flex-wrap justify-between sm:my-2'>
            <p className=''>Shipping Fee : </p>
            <p className='font-bold'>
              <FormatPrice price={shipping_fee} />
            </p>
          </div>
          <hr className='my-4' />
          <div className='flex flex-wrap justify-between sm:my-2'>
            <p className=''>Total Amount : </p>
            <p className='font-bold'>
              <FormatPrice price={total_amount + shipping_fee} />
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
