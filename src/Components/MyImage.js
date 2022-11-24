import React, { useState } from "react";

function MyImage({ imgs = [{ url: "" }] }) {
  const [mainImg, setMainImg] = useState(imgs[0]);

  return (
    <>
      <div className=' grid grid-cols-1 sm:grid-cols-2 justify-evenly'>
        <div className='flex order-2  mx-auto mt-4 sm:order-1 sm:flex-none sm:grid sm:grid-rows-1'>
          {imgs.map((elm, index) => {
            // const { url, filename } = elm;
            return (
              <figure key={index} className='sm:w-[20vw] lg:w-[15vw] m-[1px]'>
                <img
                  src={elm.url}
                  alt={elm.filename}
                  onClick={() => setMainImg(elm)}
                />
              </figure>
            );
          })}
        </div>
        <div className='flex my-auto justify-center align-middle order-1 sm:order-2'>
          <figure className='w-[100vw] mx-auto'>
            <img src={mainImg.url} alt={mainImg.filename} />
          </figure>
        </div>
      </div>
    </>
  );
}

export default MyImage;
