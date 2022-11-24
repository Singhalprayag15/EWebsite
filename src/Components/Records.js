import React from "react";
import bgRecord from "../Images/records.jpg";
import projects from "../Images/project.png";
import award from "../Images/awards.png";
import happy from "../Images/happy.png";
import CountUp from "react-countup";

function Records() {
  return (
    <>
      <div className='relative text-white'>
        <figure>
          <img
            src={bgRecord}
            alt={bgRecord}
            className=' h-[100vh] w-[100vw] top-[0vh] fixed z-[-5]'
          />
        </figure>
        <div className='bg-[#000000b0] grid grid-col-1 w-[100vw] py-6 text-center h-[75vh] sm:grid-cols-3 sm:h-[32vh] sm:py-8'>
          <div className='my-5'>
            <figure>
              <img
                src={projects}
                alt={projects}
                className='h-[40px] w-[40px] mx-auto'
              />
            </figure>
            <span className='text-[1.8rem]'>
              {" "}
              <CountUp end={150} suffix='+' duratition={5} delay={3} />
            </span>
            <p className='text-xl font-semibold'>Successful Projects</p>
          </div>
          <div className='my-5'>
            <figure>
              <img
                src={award}
                alt={award}
                className='h-[40px] w-[40px] m-auto'
              />
            </figure>
            <span className='text-[1.8rem]'>
              {" "}
              <CountUp end={100} suffix='+' duratition={5} delay={3} />
            </span>
            <p className='text-xl font-semibold'>Awards Winning</p>
          </div>
          <div className='my-5'>
            <figure>
              <img
                src={happy}
                alt={happy}
                className='h-[40px] w-[40px] m-auto'
              />
            </figure>
            <span className='text-[1.8rem]'>
              <CountUp end={200} suffix='+' duratition={5} delay={3} />
            </span>
            <p className='text-xl font-semibold'>Happy Customers</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Records;
