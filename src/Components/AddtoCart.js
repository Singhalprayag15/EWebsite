import React, { useState } from "react";
import CartAmtToggle from "./CartAmtToggle";
import { GiCheckMark } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

function AddtoCart({ product }) {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[2]);

  const [amount, setAmount] = useState(1);

  const setDec = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setInc = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <>
      <div className='mt-6 mx-3'>
        <p className='inline relative top-[-5px]'>Colors :&nbsp;</p>
        {colors.map((curColor, index) => {
          return (
            <>
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={
                  color === curColor
                    ? "rounded-full mx-1 opacity-[1]"
                    : "rounded-full mx-1 opacity-[0.36] hover:opacity-[1]"
                }
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? (
                  <GiCheckMark className='p-[5px] text-white font-extrabold text-xl' />
                ) : (
                  <GiCheckMark className='p-[5px] text-[#ffffff00] font-thin text-xl' />
                )}
              </button>
            </>
          );
        })}
        <div className=''>
          <CartAmtToggle amount={amount} setDec={setDec} setInc={setInc} />
          <NavLink
            to='/cart'
            onClick={() => addToCart(id, color, amount, product)}
          >
            <button className='mt-3 ml-2 bg-[#131A22] text-white py-2 font-semibold tracking-wider px-4 rounded-sm duration-500 hover:text-[#f9a930]'>
              Add To Cart
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default AddtoCart;
