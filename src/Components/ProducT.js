import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const ProducT = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className='mx-3 xl:w-[20vw] my-2'>
        <figure className='relative overflow-hidden rounded-lg'>
          <img
            src={image}
            alt={name}
            className=' rounded-lg hover:scale-110 duration-500'
          />
          <figcaption className='absolute top-2 right-2 bg-white text-black py-1 px-2 rounded-xl text-xs font-bold tracking-wider'>
            {category}
          </figcaption>
        </figure>

        <div className='mx-4'>
          <div className=' flex flex-wrap justify-between'>
            <h3>{name}</h3>
            <p className='text-[#d78b19]'>{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProducT;
