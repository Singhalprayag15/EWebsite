import React from "react";
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
  return (
    <>
      <div className='bg-[#232F3E] p-4 text-white mt-[5rem]'>
        <div className='w-[90vw] lg:w-[70vw] mx-auto grid grid-cols-2 lg:grid-cols-4 justify-between'>
          <div className='my-4 mx-2'>
            <h2 className='text-lg font-semibold mb-3'>Get To Know You</h2>
            <ul className=''>
              <li className='my-2 ls after:hover:w-[30%]'>
                <NavLink to='/about'>About Us</NavLink>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='https://amazon.jobs'>Careers</a>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer'>
                  Press Releases
                </a>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='https://www.amazon.science'>Vermes Science</a>
              </li>
            </ul>
          </div>
          <div className='my-4 mx-2'>
            <h2 className='text-lg font-semibold mb-3'>Contact With Us</h2>
            <ul className=''>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='https://www.facebook.com/prayag.singhal.94'>
                  Facebook
                </a>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='http://instagram.com/prayag15'>Linkedin</a>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='https://www.linkedin.com/in/prayag-singhal-2957b7231'>
                  Instagram
                </a>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='https://www.linkedin.com/in/prayag-singhal-2957b7231'>
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className='my-4 mx-2'>
            <h2 className='text-lg font-semibold mb-3'>Make Money With Us</h2>
            <ul className=''>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='/b/?node=2838698031&ld=AZINSOANavDesktopFooter&ref_=nav_footer_sell'>
                  Sell on Vermes
                </a>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT'>
                  Sell Under Vermes Acceletor
                </a>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1'>
                  Vermes Global selling
                </a>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='https://advertising.amazon.in/?ref=Amz.in'>
                  Advertise Your Product
                </a>
              </li>
            </ul>
          </div>
          <div className='my-4 mx-2'>
            <h2 className='text-lg font-semibold mb-3'>Let Us Help You</h2>
            <ul className=''>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='/gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc'>
                  100% Purchase Protection
                </a>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='/gp/browse.html?node=6967393031&ref_=footer_mobapp'>
                  App Dawnload
                </a>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='/gp/BIT/theamazonapp/ref=footer_assistant_download_copy'>
                  Vermes Assistant Dawnload
                </a>
              </li>
              <li className='my-2 ls after:hover:w-[30%]'>
                <a href='/gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he'>
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-wrap justify-evenly w-[80vw] sm:w-[50vw] lg:w-[25vw] lg:my-[1rem] text-xl mx-auto'>
          <a
            href='https://www.linkedin.com/in/prayag-singhal-2957b7231'
            className='bg-[#131A22] p-3 rounded-full duration-[1100ms] hover:bg-white hover:text-[#131A22]'
          >
            <BsInstagram />
          </a>
          <a
            href='https://www.facebook.com/prayag.singhal.94'
            className='bg-[#131A22] p-3 rounded-full duration-[1100ms] hover:bg-white hover:text-[#131A22]'
          >
            <FiFacebook />
          </a>
          <a
            href='https://www.linkedin.com/in/prayag-singhal-2957b7231'
            className='bg-[#131A22] p-3 rounded-full duration-[1100ms] hover:bg-white hover:text-[#131A22]'
          >
            <FiTwitter />
          </a>
          <a
            href='https://www.linkedin.com/in/prayag-singhal-2957b7231'
            className='bg-[#131A22] p-3 rounded-full duration-[1100ms] hover:bg-white hover:text-[#131A22]'
          >
            <SlSocialLinkedin />
          </a>
        </div>
      </div>
      <div className='bg-[#131A22] text-white text-center py-5'>
        <p className=''>
          Conditions of Use & Sale Privacy Notice Interest-Based Ads
        </p>
        <p className=''>© 1996-2022, electro.com, Inc. and its affiliates</p>
      </div>
    </>
  );
}

export default Footer;
