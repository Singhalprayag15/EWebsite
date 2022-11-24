import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { GiCrossedSabres } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../Context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const [nav, setNav] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const { total_item } = useCartContext();
  // console.log(total_item);

  var tongle = () => {
    let mobileNav = document.getElementById("mobileNav");

    if (nav === false) {
      mobileNav.style.display = "inherit";
      setNav(true);
    }
    if (nav === true) {
      mobileNav.style.display = "none";
      setNav(false);
    }
  };

  return (
    <>
      <div className='bg-[#000000a2] w-[100vw] text-white absolute top-0 z-10 py-2 px-4 grid grid-cols-3 justify-between gap-[4rem] lg:gap-0'>
        <NavLink
          to='/'
          className='logo_name uppercase text-2xl tracking-widest'
        >
          Electro
        </NavLink>
        <div className=''>
          {isAuthenticated && (
            <p className='text-center text_font mt-1 tracking-wider'>
              {user.name}
            </p>
          )}
        </div>
        <ul className='grid-cols-7 ml-[-5rem] pt-[0.15rem] justify-evenly hidden lg:grid'>
          <li className=''>
            <NavLink to='/' className='ls after:hover:w-[100%]'>
              Home
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/about' className='ls after:hover:w-[100%]'>
              About
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/products' className='ls after:hover:w-[100%]'>
              Products
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/contact' className='ls after:hover:w-[100%]'>
              Contact
            </NavLink>
          </li>
          <li className=''>
            <NavLink to='/cart' className='relative'>
              <FiShoppingCart className='absolute top-[0.40rem] ' />
              <span className='absolute right-[-2.1rem] bg-white font-extrabold px-[3px] text-black rounded-full text-[12px] tracking-widest'>
                {total_item}
              </span>
            </NavLink>
          </li>
          {isAuthenticated ? (
            <li className='col-span-2'>
              <button
                className='border-2 border-white px-4 pb-1 hover:text-black hover:bg-white duration-500'
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button
                className='border-2 border-white px-4 pb-1 hover:text-black hover:bg-white duration-500'
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            </li>
          )}
        </ul>
        {/*  */}
        <div className=' m-auto lg:hidden'>
          <button type='button' className='relative' onClick={() => tongle()}>
            {nav ? (
              <GiCrossedSabres className=' absolute right-[-3rem] top-[-1.1rem] text-[1.5rem] hamburger' />
            ) : (
              <MdOutlineSegment className=' absolute right-[-3rem] top-[-1.1rem] text-[2rem]' />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className='lg:hidden absolute z-10 top-[2.95rem] w-[100vw]'>
        <div
          id='mobileNav'
          className='bg-[#000000a2] text-white px-4 py-2 border-t-[1px] border-white hidden '
        >
          <ul className=''>
            <li className='my-2 cursor-pointer'>
              <NavLink to='/' className='ls after:hover:w-[100%]'>
                Home
              </NavLink>
            </li>
            <li className='my-2 cursor-pointer'>
              <NavLink to='/about' className='ls'>
                About
              </NavLink>
            </li>
            <li className='my-2 cursor-pointer'>
              <NavLink to='/products' className='ls'>
                Products
              </NavLink>
            </li>
            <li className='my-2 cursor-pointer'>
              <NavLink to='/contact' className='ls'>
                Contact
              </NavLink>
            </li>
            <li className='my-2 cursor-pointer'>
              <NavLink to='/cart' className='ls'>
                <span className='pr-2 inline'>Cart</span>
                <FiShoppingCart className='inline' />
              </NavLink>
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  className='border-2 border-white px-4 pb-1 hover:text-black hover:bg-white duration-500'
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button
                  className='border-2 border-white px-4 pb-1 hover:text-black hover:bg-white duration-500'
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
