import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

function ListView({ products }) {
  return (
    <>
      <div className=''>
        <div className=''>
          {products.map((curElm) => {
            const { id, name, image, price, description } = curElm;
            return (
              <div className='grid lg:grid-cols-3 shadow-md shadow-[#29435d88] mx-auto my-4 w-[65vw] bg-[#aecff188] lg:h-[30vh] rounded-lg overflow-x-hidden lg:px-2'>
                <figure className=' overflow-hidden rounded-lg w-[100%] lg:w-[15vw] lg:h-[25vh] m-auto'>
                  <img
                    src={image}
                    alt={name}
                    className='rounded-lg w-[100%] lg:w-[15vw] hover:scale-110 duration-500 lg:h-[25vh]'
                  />
                </figure>
                <div className='text-center py-2 lg:h-[25vh] lg:col-span-2 '>
                  <h1 className='text-[1.6rem] text_font'>{name}</h1>
                  <p className='my-3'>
                    <FormatPrice price={price} />
                  </p>
                  <p className='lg:h-[7vh] mx-4 lg:mr-2'>
                    {description.slice(0, 120)}...
                  </p>
                  <NavLink to={`/singleproduct/${id}`}>
                    <button
                      type='button'
                      className='my-4 bg-[#131A22] text-white px-4 rounded-sm py-2 hover:bg-[#1a3758] active:text-[#d78b19] duration-500 hover:scale-105'
                    >
                      Read More
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListView;
