import React from "react";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";

function MyStars({ stars, reviews }) {
  const rating = Array.from({ length: 5 }, (elm, index) => {
    let num = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <MdStar className='text-[#d78b19]' />
        ) : stars >= num ? (
          <MdStarHalf className='text-[#d78b19]' />
        ) : (
          <MdStarOutline className='text-[#d78b19]' />
        )}
      </span>
    );
  });

  return (
    <>
      <span className='grid grid-cols-5 w-[4.5rem]'>{rating}</span>(
      customer&nbsp;
      {reviews} reviews )
    </>
  );
}

export default MyStars;
