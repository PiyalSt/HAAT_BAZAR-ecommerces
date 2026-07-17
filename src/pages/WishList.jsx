import React from "react";
import { products } from "../assets/assets";
import Card from "../components/Card";
import Title from "../components/Title";

const WishList = () => {
  return (
    <>
      <div className="w-7xl mx-auto px-4 my-12 flex flex-col gap-8">
        <div className="flex flex-col gap-10">
          <div className="w-full flex items-center justify-between">
            <p className="font-poppins font-medium">Wishlist (4)</p>
            <button className="py-2 px-8 border border-gray-900 font-poppins font-medium cursor-pointer hover:bg-secondary-2 hover:border-transparent hover:text-white duration-300 rounded-md">
              Move All To Bag
            </button>
          </div>
          <div>
            <div className="flex justify-between items-center">
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
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <Title titleOne={'Just For You'} />

            <button className="py-2 px-8 border border-gray-300 rounded-sm shadow font-poppins font-medium cursor-pointer hover:bg-secondary-2 hover:border-transparent hover:text-white duration-300">
              See All
            </button>
          </div>
          <div>
            <div className="flex justify-between items-center">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
