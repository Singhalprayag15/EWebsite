import React from "react";
import Footer from "./Footer";
import ProductList from "./ProductList";
import Sort from "./Sort";

function Products() {
  // console.log(filter_products);
  return (
    <>
      <div className=''>
        <div className='bg-[#131A22] w-[100%] h-[7vh]'></div>
        <div className='w-[80vw] m-auto mt-[3rem]'>
          <div className=''>
            <Sort />
            <ProductList />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Products;
