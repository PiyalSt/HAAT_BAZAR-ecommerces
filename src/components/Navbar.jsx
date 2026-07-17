import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaAngleDown, FaRegStar, FaRegUser } from "react-icons/fa6";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge, IconButton } from "@mui/material";
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isUserActive, setIsUserActive] = useState(true);

  return (
    <>
      <div>
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="flex justify-center items-center py-3">
              <div className="flex items-center gap-2">
                <p className="font-poppins font-normal text-sm text-text">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                </p>
                <NavLink to={"/"}>
                  <li className="list-none font-poppins font-semibold text-sm text-text  hover:underline">
                    ShopNow
                  </li>
                </NavLink>
              </div>
              <div className="absolute right-5">
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="font-poppins font-normal text-sm text-text">
                    English
                  </p>
                  <FaAngleDown className="font-bold text-base text-text" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-400">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center pt-10 pb-4">
              <div>
                <NavLink to={"/"}>
                  <h2 className="font-inter font-bold text-2xl text-text-2">
                    Exclusive
                  </h2>
                </NavLink>
              </div>

              <div className="flex items-center gap-12 ">
                <NavLink>
                  <li className="list-none font-poppins font-normal text-base text-text-2  hover:underline hover:text-secondary-2 duration-200">
                    Home
                  </li>
                </NavLink>
                <NavLink>
                  <li className="list-none font-poppins font-normal text-base text-text-2  hover:underline hover:text-secondary-2 duration-200">
                    Contact
                  </li>
                </NavLink>
                <NavLink>
                  <li className="list-none font-poppins font-normal text-base text-text-2  hover:underline hover:text-secondary-2 duration-200">
                    About
                  </li>
                </NavLink>
                <NavLink to={"/signup"}>
                  <li className="list-none font-poppins font-normal text-base text-text-2  hover:underline hover:text-secondary-2 duration-200">
                    Sign Up
                  </li>
                </NavLink>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center justify-between w-60 bg-secondary py-2 pl-5 pr-3 rounded-sm">
                  <input
                    className="w-full outline-none font-poppins font-normal text-xs text-text-2"
                    type="text"
                    placeholder="What are you looking for ?"
                  />
                  <IconButton size="small">
                    <FiSearch />
                  </IconButton>
                </div>
                <div className="flex items-center gap-4">
                  <IconButton aria-label="show 4 unread messages">
                    <Badge badgeContent={4} max={99}>
                      <Link to={'wishlist'}>
                        <GoHeart className="text-2xl cursor-pointer" />
                      </Link>
                    </Badge>
                  </IconButton>
                  <IconButton>
                    <Badge badgeContent={3} max={99}>
                      <Link to={'cart'}>
                        <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
                      </Link>
                    </Badge>
                  </IconButton>

                  <div className="relative group">
                    {isUserActive && (
                      <IconButton>
                        <FaRegUser />
                      </IconButton>
                    )}
                    <div className="absolute top-11 right-2 z-20 min-w-70 rounded-xl border border-white/10 bg-slate-800/70 px-4 py-4 backdrop-blur-md shadow-xl flex-col gap-2 group-hover:flex hidden">
                      <div className="flex items-center gap-4 text-white hover:bg-gray-400/50 py-2 px-4 rounded-sm cursor-pointer">
                        <FaRegUser className="text-lg" />
                        <p className="font-poppins font-normal text-base">
                          Manage My Account
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-white hover:bg-gray-400/50 py-2 px-4 rounded-sm cursor-pointer">
                        <FiShoppingBag className="text-lg" />
                        <p className="font-poppins font-normal text-base">
                          My Order
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-white hover:bg-gray-400/50 py-2 px-4 rounded-sm cursor-pointer">
                        <AiOutlineCloseCircle className="text-lg" />
                        <p className="font-poppins font-normal text-base">
                          My Cancellations
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-white hover:bg-gray-400/50 py-2 px-4 rounded-sm cursor-pointer">
                        <FaRegStar className="text-lg" />
                        <p className="font-poppins font-normal text-base">
                          My Reviews
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-white hover:bg-gray-400/50 py-2 px-4 rounded-sm cursor-pointer">
                        <TbLogout2 className="text-lg" />
                        <p className="font-poppins font-normal text-base">
                          Logout
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
