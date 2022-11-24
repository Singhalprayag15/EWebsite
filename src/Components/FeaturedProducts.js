import React from "react";
import { useProductContext } from "../Context/ProductContext";
import ProducT from "./ProducT";

function FeaturedProducts() {
  const { isLoading, featuredProducts } = useProductContext();
  //   console.log(fectureProducts);
  //   console.log("Hii");

  if (isLoading) {
    return (
      <div className='text-[1.5rem] mt-[4rem] text-[#131A22] text-center font-semibold text_font'>
        Loading.....
      </div>
    );
  }

  return (
    <>
      <div className='bg-[#131A22] text-white p-4 mt-[5rem]'>
        <div className='w-[85vw] lg:w-[75vw] mx-auto'>
          <p className='text-[#d78b19] uppercase text-xs tracking-widest mt-4'>
            Check Now.
          </p>
          <h1 className='text-[2rem] text_font'>Our Feacture Services</h1>
          <div className='grid grid-cols-1 sm:grid-cols-3 justify-center my-8 mx-auto'>
            {featuredProducts.map((curElm) => {
              return <ProducT key={curElm.id} {...curElm} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
