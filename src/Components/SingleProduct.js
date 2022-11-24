import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import { FaShippingFast } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import MyImage from "./MyImage";
import MyStars from "./MyStars";
import AddtoCart from "./AddtoCart";

const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  // console.log(singleProduct);
  const { id } = useParams();
  // console.log(id);

  const {
    id: ID,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div className='text-2xl text_font flex items-center justify-center h-[100vh] '>
        Loading.....
      </div>
    );
  }

  return (
    <>
      <div className=' overflow-x-hidden'>
        <div className='bg-[#131A22] text-white pt-[4rem] p-4 text-xl ttracking-wide text_font'>
          <NavLink to={"/"} className='hover:text-[#d78b19] duration-500'>
            Home
          </NavLink>{" "}
          / {name}
        </div>
        <div className='grid grid-cols-1 justify-evenly overflow-x-hidden md:gap-x-10 lg:gap-x-28 sm:grid-cols-2 lg:w-[90vw] mx-auto'>
          <div className=' sm:my-[5rem] '>
            <MyImage imgs={image} />
          </div>
          <div className='my-[2rem] sm:my-[3rem] mx-4'>
            <h1 className='text-[1.8rem] lg:text-[2rem] text_font font-medium'>
              {name}
            </h1>
            <p className='my-2'>
              <MyStars stars={stars} reviews={reviews} />
            </p>
            <span className='font-bold text-sm my-2'>
              MRP &nbsp;
              <del>{price + 30000}</del>
            </span>
            <p className='text-[#244aa4] text-[1rem] font-extrabold my-2 text_font'>
              Deal of the Day: {price}rs
            </p>
            <p className='text-lg lg:text-base lg:tracking-wider'>
              {description}
            </p>
            <div className='my-[1.5rem] grid grid-cols-3 justify-evenly'>
              <div className=''>
                <FaShippingFast className='m-auto text-[2.5rem] mb-1 bg-slate-300 rounded-full py-[5px] px-[8px]' />
                <p className='text-xs text-center'>Free Delivery</p>
              </div>
              <div className=''>
                <TbReplace className='m-auto text-[2.5rem] mb-1 bg-slate-300 rounded-full py-[5px] px-[8px]' />
                <p className='text-xs text-center'>30 days Replacement</p>
              </div>
              <div className=''>
                <MdOutlineSecurity className='m-auto text-[2.5rem] mb-1 bg-slate-300 rounded-full py-[5px] px-[8px]' />
                <p className='text-xs text-center'>Free Delivery</p>
              </div>
            </div>
            <hr />
            <div className=' mx-3 border-b-2 border-black'>
              <div className='my-[2rem]'>
                <p className='my-4'>
                  Available : &nbsp;
                  <span className='font-semibold'>
                    {stock > 0 ? "In stock" : "Not Available"}
                  </span>
                </p>
                <p className='my-4'>
                  Id : &nbsp;
                  <span className='font-semibold'>{id}</span>
                </p>
                <p className='my-4'>
                  Brand : &nbsp;
                  <span className='font-semibold'>{company}</span>
                </p>
              </div>
            </div>
            <div className=''>
              {stock > 0 && <AddtoCart product={singleProduct} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
