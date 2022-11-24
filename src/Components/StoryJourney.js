import React from "react";

function StoryJourney(props) {
  return (
    <>
      <div className='my-[3rem] w-[90vw] mx-auto'>
        <h1 className='text-[3rem] text_font my-2 text-center'>
          {props.title}
        </h1>
        <div className='grid grid-cols-1 justify-evenly lg:grid-cols-2'>
          <p className={`text-justify lg:my-auto ${props.order1}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            dicta quam veritatis accusamus rem eum minus assumenda repellat
            libero corrupti, quia cumque ea quaerat ipsum reiciendis ratione
            facilis deleniti iure?
          </p>
          <figure className={`my-8 ${props.order2}`}>
            <img
              src={props.img}
              alt={props.img}
              className='h-[30vh] w-[70vw] sm:w-[55vw] md:h-[35vh] lg:h-[30vh] lg:w-[35vw] mx-auto rounded-md shadow-xl shadow-slate-700'
            />
          </figure>
        </div>
      </div>
    </>
  );
}

export default StoryJourney;
