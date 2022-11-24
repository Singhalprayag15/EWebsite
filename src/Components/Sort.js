import React from "react";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
import { useFilterContext } from "../Context/FilterProductContext";
import FilterSection from "./FilterSection";

function Sort() {
  const { filter_products, grid_view, setGridView, setListView } =
    useFilterContext();

  return (
    <>
      <div className=' flex justify-between mb-[5rem]'>
        <div className=''>
          <button className='mx-1'>
            <BsFillGridFill
              className={
                grid_view
                  ? "bg-black text-[#b2d8ffe6] rounded-full p-2 text-[2.2rem]"
                  : "bg-[#aecff188] rounded-full p-2 text-[2.2rem]"
              }
              onClick={setGridView}
            />
          </button>
          <button className='mx-1'>
            <BsListUl
              className={
                grid_view
                  ? "bg-[#aecff188] rounded-full p-2 text-[2.2rem]"
                  : "bg-black text-[#b2d8ffe6] rounded-full p-2 text-[2.2rem]"
              }
              onClick={setListView}
            />
          </button>
        </div>
        <div className=''>{`${filter_products.length} Products Available`}</div>

        <div className=''>
          <FilterSection />
        </div>
      </div>
    </>
  );
}

export default Sort;
