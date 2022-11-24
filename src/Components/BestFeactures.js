import React from "react";

function BestFeactures({ icon, title, content }) {
  return (
    <>
      <div className='w-[80vw] p-4 mx-auto mb-8 overflow-hidden shadow-lg shadow-slate-400 duration-500 hover:shadow-2xl hover:shadow-slate-700 rounded-xl sm:w-[40vw] lg:w-[20vw]'>
        <div className='text-[2rem] mx-auto my-2 w-[2vw]'>{icon}</div>
        <div className='text-center mt-6 pb-4'>
          <p className='text-xl my-2 font-semibold text_font mx-4'>{title}</p>
          <p className='text-xl '>{content}</p>
        </div>
      </div>
    </>
  );
}

export default BestFeactures;
