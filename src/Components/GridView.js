import React from "react";
import ProducT from "./ProducT";

function GridView({ products }) {
  // console.log(products);
  return (
    <>
      <div className=''>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly'>
          {products.map((curElm) => {
            return <ProducT key={curElm.id} {...curElm} />;
          })}
        </div>
      </div>
    </>
  );
}

export default GridView;
