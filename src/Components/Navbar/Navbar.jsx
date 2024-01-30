import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import "./navbar.css";
import { cartContext } from "../../contexts/cartContext";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { itemAmount } = useContext(cartContext);

  return (
    <div className="sticky top-0 bg-white z-20 ">
      <nav className="w-full bg-transparent shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h2 className="text-2xl font-bold">Hydroponic</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="navlinks text-black hover:text-green-500">
                  <NavLink to="/" className="item-link">
                    Home
                  </NavLink>
                  {/* <a href="javascript:void(0)">Home</a> */}
                </li>
                <li className="text-black hover:text-green-500">
                  <NavLink to="/shop">Shopping</NavLink>
                </li>
                <li className="text-black hover:text-green-500">
                  <NavLink to="/about">About</NavLink>
                  {/* <a href="javascript:void(0)">About</a> */}
                </li>
                <li className="text-black hover:text-green-500">
                  <NavLink to="/contact">Contact</NavLink>
                  {/* <a href="javascript:void(0)">Contact</a> */}
                </li>
                <li className="text-black hover:text-green-500">
                  <NavLink to="/login">Login</NavLink>
                  {/* <a href="javascript:void(0)">Login</a> */}
                </li>
                <li className="text-black hover:text-green-500">
                  <NavLink to="/cart">
                    {" "}
                    {/* {cart }   */}
                    <div
                      // onClick={() => setIsOpen(!isOpen)}
                      className="relative flex cursor-pointer "
                    >
                      <BsBag className="text-2xl" />
                      <div className="bg-red-500  absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center text-white">
                        {itemAmount}
                      </div>
                    </div>
                  </NavLink>
                  {/* <a href="javascript:void(0)">Login</a> */}
                </li>
                <li className="text-black hover:text-green-500">
                  <NavLink to="/signup">Sign Up</NavLink>
                  {/* <a href="javascript:void(0)">Sing Up</a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
         
      </nav>
    </div>
  );
}
