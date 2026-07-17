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
import assets, { products } from "../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderLib from "react-slick";
import { Link } from "react-router";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const Slider = SliderLib.default ? SliderLib.default : SliderLib;

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
            <div className="w-9/12 p-10">
              <Slider {...settings}>
                <div className="w-full h-full">
                  <img
                    src={assets.banner}
                    className="w-full h-full object-cover"
                    alt="Banner 1"
                  />
                </div>
                <div>
                  <img
                    src={assets.bestProduct}
                    className="w-full h-full object-cover"
                    alt="Banner 2"
                  />
                </div>
                <div>
                  <img
                    src={assets.banner}
                    className="w-full h-full object-cover"
                    alt="Banner 3"
                  />
                </div>
                <div>
                  <img
                    src={assets.banner}
                    className="w-full h-full object-cover"
                    alt="Banner 1"
                  />
                </div>
                <div>
                  <img
                    src={assets.bestProduct}
                    className="w-full h-full object-cover"
                    alt="Banner 2"
                  />
                </div>
                <div>
                  <img
                    src={assets.banner}
                    className="w-full h-full object-cover"
                    alt="Banner 3"
                  />
                </div>
              </Slider>
            </div>
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

          <div className="flex justify-between items-center mt-8">
            {products
              .filter((item) => item.bestProduct === "best")
              .map((item) => (
                <div key={item.id}>
                  <Card
                    productImg={item.image}
                    productName={item.name}
                    newProductPrice={`$${item.price - (item.price * (item.discount / 100)).toFixed(2)}`}
                    productPrice={`$${item.price}`}
                    rating={item.rating}
                  />
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link to={"/products"}>
              <CommonButton text="View All Products" />
            </Link>
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

        <section id="bestProduct" className="my-32">
          <div className="flex flex-col gap-16">
            <div className="flex justify-between items-end">
              <Title
                titleOne={"This Month"}
                titleTwo={"Best Selling Products"}
              />
              <CommonButton text={"View All"} />
            </div>

            <div className="flex items-center justify-between flex-wrap">
              {products
                .filter((item) => item.discount)
                .map((item) => (
                  <div key={item.id}>
                    <Card
                      isDiscount="true"
                      discount={`${item.discount}%`}
                      productImg={item.image}
                      productName={item.name}
                      newProductPrice={`$${item.price - (item.price * (item.discount / 100)).toFixed(2)}`}
                      productPrice={`$${item.price}`}
                      rating={item.rating}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-30 w-full flex items-center justify-center">
            <img className="w-full" src={assets.bestProduct} alt="Enhance" />
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
          <div className="flex justify-between items-center mt-8">
            {products
              .filter((item) => item.bestProduct === "best")
              .map((item) => (
                <div key={item.id}>
                  <Card
                    productImg={item.image}
                    productName={item.name}
                    newProductPrice={`$${item.price - (item.price * (item.discount / 100)).toFixed(2)}`}
                    productPrice={`$${item.price}`}
                    rating={item.rating}
                  />
                </div>
              ))}
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
                  src={assets.product1}
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
                  <img
                    className="w-full h-70 rounded-sm"
                    src={assets.product2}
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
                <div className="w-full h-74 flex gap-8">
                  <div className="w-full relative group overflow-hidden cursor-pointer">
                    <img className="w-full" src={assets.product3} alt="" />
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
                    <img className="w-full" src={assets.product4} alt="" />
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
              <img src={assets.ServicesOne} alt="services" />
              <div className="text-center">
                <h1 className="font-poppins font-semibold text-xl">
                  FREE AND FAST DELIVERY
                </h1>
                <p className="font-poppins font-normal text-sm">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <img src={assets.ServicesTwo} alt="services" />
              <div className="text-center">
                <h1 className="font-poppins font-semibold text-xl">
                  24/7 CUSTOMER SERVICE
                </h1>
                <p className="font-poppins font-normal text-sm">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <img src={assets.ServicesThree} alt="services" />
              <div className="text-center">
                <h1 className="font-poppins font-semibold text-xl">
                  MONEY BACK GUARANTEE
                </h1>
                <p className="font-poppins font-normal text-sm">
                  We reurn money within 30 days
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
