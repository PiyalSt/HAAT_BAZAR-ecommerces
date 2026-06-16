import { Button, IconButton } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "../components/Card";
import CommonButton from "../components/CommonButton";
import CardTwo from "../components/CardTwo";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {
  IoCameraOutline,
  IoGameControllerOutline,
  IoWatchOutline,
} from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import EnhanceImg from "../assets/enhance.png";
import F1 from "../assets/f-1.png";
import F2 from "../assets/f-2.png";
import F3 from "../assets/f-3.png";
import F4 from "../assets/f-4.png";
import services from "../assets/Services.png";
import services1 from "../assets/Services (1).png";
import services2 from "../assets/Services (2).png";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <section id="banner">
          <div className="flex">
            <div className="w-3/12 border-r border-gray-400">
              <div className="py-10">
                <div className="flex flex-col gap-1 items-start">
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Woman’s Fashion
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Men’s Fashion
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Electronics
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Home & Lifestyle
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Medicine
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Sports & Outdoor
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Baby’s & Toys
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Groceries & Pets
                    </li>
                  </Button>
                  <Button sx={"color: black;"}>
                    <li className="list-none font-poppins font-normal text-base text-black">
                      Health & Beauty
                    </li>
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-9/12 "></div>
          </div>
        </section>

        <section id="todays" className="my-32">
          <div className="flex items-end justify-between">
            <Title titleOne={"Today's"} titleTwo={"Flash Sales"} />

            <div className="flex items-center gap-6">
              <div className="space-y-2">
                <p className="font-poppins font-medium text-sm text-secondary-2">
                  Days
                </p>
                <p className="font-inter font-bold text-4xl text-text-2">03</p>
              </div>
              <p className="text-5xl text-hover-button">:</p>
              <div className="space-y-2">
                <p className="font-poppins font-medium text-sm text-secondary-2">
                  Hours
                </p>
                <p className="font-inter font-bold text-4xl text-text-2">21</p>
              </div>
              <p className="text-5xl text-hover-button">:</p>
              <div className="space-y-2">
                <p className="font-poppins font-medium text-sm text-secondary-2">
                  Minutes
                </p>
                <p className="font-inter font-bold text-4xl text-text-2">24</p>
              </div>
              <p className="text-5xl text-hover-button">:</p>
              <div className="space-y-2">
                <p className="font-poppins font-medium text-sm text-secondary-2">
                  Seconds
                </p>
                <p className="font-inter font-bold text-4xl text-text-2">18</p>
              </div>
            </div>

            <div className="flex gap-4">
              <IconButton>
                <FaArrowLeft />
              </IconButton>
              <IconButton>
                <FaArrowRight />
              </IconButton>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="flex justify-center mt-10">
            <CommonButton text="View All Products" />
          </div>
        </section>

        <section id="categories" className="my-32">
          <div className="flex flex-col gap-10">
            <div className="flex items-end justify-between">
              <Title titleOne={"Categories"} titleTwo={"Browse By Category"} />

              <div className="flex gap-4">
                <IconButton>
                  <FaArrowLeft />
                </IconButton>
                <IconButton>
                  <FaArrowRight />
                </IconButton>
              </div>
            </div>
            <div className="mt-20 flex items-center justify-between flex-wrap">
              <CardTwo
                cateIcon={
                  <MdOutlinePhoneAndroid className="text-6xl text-primary-1 group-hover:text-text duration-300 transition-all ease-in" />
                }
                categories="Electronics"
              />
              <CardTwo
                cateIcon={
                  <HiOutlineDesktopComputer className="text-6xl text-primary-1 group-hover:text-text duration-300 transition-all ease-in" />
                }
                categories="Electronics"
              />
              <CardTwo
                cateIcon={
                  <IoWatchOutline className="text-6xl text-primary-1 group-hover:text-text duration-300 transition-all ease-in" />
                }
                categories="Electronics"
              />
              <CardTwo
                cateIcon={
                  <IoCameraOutline className="text-6xl text-primary-1 group-hover:text-text duration-300 transition-all ease-in" />
                }
                categories="Electronics"
              />
              <CardTwo
                cateIcon={
                  <CiHeadphones className="text-6xl text-primary-1 group-hover:text-text duration-300 transition-all ease-in" />
                }
                categories="Electronics"
              />
              <CardTwo
                cateIcon={
                  <IoGameControllerOutline className="text-6xl text-primary-1 group-hover:text-text duration-300 transition-all ease-in" />
                }
                categories="Electronics"
              />
            </div>
          </div>
        </section>

        <section id="this-month" className="my-32">
          <div className="flex flex-col gap-16">
            <div className="flex justify-between items-end">
              <Title
                titleOne={"This Month"}
                titleTwo={"Best Selling Products"}
              />
              <CommonButton text={"View All"} />
            </div>
            <div className="flex justify-between items-center">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          <div className="mt-30 w-full flex items-center justify-center">
            <img className="w-full" src={EnhanceImg} alt="Enhance" />
          </div>
        </section>

        <section id="Our-products" className="my-32">
          <div className="flex justify-between items-end">
            <Title
              titleOne={"Our Products"}
              titleTwo={"Explore Our Products"}
            />

            <div className="flex gap-4">
              <IconButton>
                <FaArrowLeft />
              </IconButton>
              <IconButton>
                <FaArrowRight />
              </IconButton>
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-y-16 mt-16">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="flex justify-center items-center mt-12">
            <CommonButton text={"View All Products"} />
          </div>
        </section>

        <section id="featued" className="my-32">
          <div>
            <div>
              <Title titleOne={"Featured"} titleTwo={"New Arrival"} />
            </div>
            <div className="w-full flex gap-8 mt-16">
              <div className="w-full h-150 rounded-sm relative group overflow-hidden cursor-pointer">
                <img
                  className="w-full h-full object-cover rounded-sm"
                  src={F1}
                  alt=""
                />
                <div className="absolute group-hover:bottom-8 left-8 flex flex-col gap-4 duration-300">
                  <h4 className="font-poppins font-semibold text-2xl text-text">
                    PlayStation 5
                  </h4>
                  <p className="w-60 font-poppins font-normal text-sm text-text">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <button className="font-poppins font-medium text-base border-b border-slate-400 text-text w-fit cursor-pointer">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="w-full h-150 flex gap-5 flex-col">
                <div className="w-full h-70 rounded-sm relative group overflow-hidden cursor-pointer">
                  <img className="w-full h-70 rounded-sm" src={F2} alt="" />
                  <div className="absolute group-hover:bottom-8 left-8 flex flex-col gap-4 duration-300">
                    <h4 className="font-poppins font-semibold text-2xl text-text">
                      PlayStation 5
                    </h4>
                    <p className="w-60 font-poppins font-normal text-sm text-text">
                      Black and White version of the PS5 coming out on sale.
                    </p>
                    <button className="font-poppins font-medium text-base border-b border-slate-400 text-text w-fit cursor-pointer">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="w-full h-74 flex gap-8">
                  <div className="w-full relative group overflow-hidden cursor-pointer">
                    <img className="w-full" src={F3} alt="" />
                    <div className="absolute group-hover:bottom-8 left-8 flex flex-col gap-4 duration-300">
                      <h4 className="font-poppins font-semibold text-2xl text-text">
                        PlayStation 5
                      </h4>
                      <p className="w-60 font-poppins font-normal text-sm text-text">
                        Black and White version of the PS5 coming out on sale.
                      </p>
                      <button className="font-poppins font-medium text-base border-b border-slate-400 text-text w-fit cursor-pointer">
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div className="w-full relative group overflow-hidden cursor-pointer">
                    <img className="w-full" src={F4} alt="" />
                    <div className="absolute group-hover:bottom-8 left-8 flex flex-col gap-4 duration-300">
                      <h4 className="font-poppins font-semibold text-2xl text-text">
                        PlayStation 5
                      </h4>
                      <p className="w-60 font-poppins font-normal text-sm text-text">
                        Black and White version of the PS5 coming out on sale.
                      </p>
                      <button className="font-poppins font-medium text-base border-b border-slate-400 text-text w-fit cursor-pointer">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services-card" className="my-32">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center gap-6">
                <img src={services} alt="services" />
              <div className="text-center">
                <h1 className="font-poppins font-semibold text-xl">FREE AND FAST DELIVERY</h1>
                <p className="font-poppins font-normal text-sm">Free delivery for all orders over $140</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                <img src={services1} alt="services" />
              <div className="text-center">
                <h1 className="font-poppins font-semibold text-xl">24/7 CUSTOMER SERVICE</h1>
                <p className="font-poppins font-normal text-sm">Friendly 24/7 customer support</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                <img src={services2} alt="services" />
              <div className="text-center">
                <h1 className="font-poppins font-semibold text-xl">MONEY BACK GUARANTEE</h1>
                <p className="font-poppins font-normal text-sm">We reurn money within 30 days</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
