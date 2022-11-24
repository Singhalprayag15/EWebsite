import React from "react";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

function Contact() {
  return (
    <>
      <HeroSection
        img1={`lg:bg-[url("./Images/contactBg.gif")]`}
        img2={`bg-[url("./Images/contactBg2.gif")]`}
        title='Contact Us'
      />
      <div className='my-[4rem] text-center'>
        <h1 className='text-[2rem] text_font font-bold '>ADDITIONAL INFO</h1>
        <p className='my-6 w-[60vw] mx-auto'>
          I am alone, and feel the charm of existence in this spot, which was
          created for the bliss of souls like mine. I am so happy, my dear
          friend.
        </p>
        <hr className='w-[60vw] m-auto' />
        <h1 className='text-[1.5rem] text_font font-bold mt-6'>
          BUSINESS HOURS
        </h1>
        <p className=''>
          Mo - Fr: 8am to 6pm
          <br />
          Sa, Su: 10am to 2pm
        </p>
      </div>
      <h1 className='text-[2rem] text_font font-bold mt-6 mb-2 text-center'>
        Get In Touch
      </h1>
      <div
        className='grid
       grid-cols-1 justify-evenly lg:grid-cols-2 w-[90vw] mx-auto'
      >
        <form
          className='my-4 grid grid-cols-1 justify-center w-[70vw] m-auto order-2 lg:w-[40vw]'
          action='https://formspree.io/f/xwkzayyq'
          method='POST'
        >
          <input
            className='border-2 border-[#131A22] py-1 px-4 rounded-sm my-2'
            type='text'
            placeholder='Your Name'
            name='username'
            required
            autoComplete='off'
          />
          <input
            className='border-2 border-[#131A22] py-1 px-4 rounded-sm my-2'
            type='email'
            name='email'
            placeholder='Your Email'
            required
            autoComplete='off'
          />
          <textarea
            name='message'
            placeholder='Enter your message.'
            cols='30'
            rows='10'
            required
            autoComplete='off'
            className='border-2 border-[#131A22] py-1 px-4 rounded-sm my-2 h-[20vh]'
          ></textarea>
          <button
            type='submit'
            className='text-white bg-[#232F3E] py-1 px-8 duration-500 border-2 border-[#232F3E] rounded-sm hover:bg-white hover:text-[#232F3E] tracking-wider font-semibold'
          >
            Submit
          </button>
        </form>
        <div className=''>
          <iFrame
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113846.3078584918!2d76.78573005752911!3d29.96745442383199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e46cf85c85d3d%3A0x7f06e815caca33f4!2sKurukshetra%2C%20Haryana!5e0!3m2!1sen!2sin!4v1668055827055!5m2!1sen!2sin'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='h-[35vh] w-[80vw] mx-auto order-1 my-4 lg:w-[40vw] lg:mt-12 xl:mt-10'
          ></iFrame>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
