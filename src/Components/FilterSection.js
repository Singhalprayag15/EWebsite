import React from "react";
import { useFilterContext } from "../Context/FilterProductContext";

function FilterSection() {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  return (
    <>
      <div className=''>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            name='text'
            value={text}
            onChange={updateFilterValue}
            className='border-2 border-black'
          />
        </form>
      </div>
    </>
  );
}

export default FilterSection;
