import React from "react";
import assets from "../assets/assets";
import CommonButton from "../components/CommonButton";

const ShopingCart = () => {
  return (
    <>
      <div className="w-7xl mx-auto px-4 my-8 ">
        <div>
          <h4 className="my-12">Home / Cart</h4>
          <div>
            <div className="">
              <div className="flex justify-between list-none">
                <li>Product</li>
                <li className="ml-26">Price</li>
                <li className="ml-6">Quantity</li>
                <li>Subtotal</li>
              </div>

              <div className="flex flex-col gap-2 my-4">
                <div className="flex justify-between items-center py-4 px-2 border border-gray-300 rounded-sm shadow">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-12 rounded-md"
                      src={assets.product1}
                      alt=""
                    />
                    <p>LCD Monitor</p>
                  </div>
                  <div>
                    <p>$650</p>
                  </div>
                  <div>
                    <input
                      className="w-16 outline-0 border-2 rounded-md px-2"
                      type="number"
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <p>$650</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 px-2 border border-gray-300 rounded-sm shadow">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-12 rounded-md"
                      src={assets.product1}
                      alt=""
                    />
                    <p>LCD Monitor</p>
                  </div>
                  <div>
                    <p>$650</p>
                  </div>
                  <div>
                    <input
                      className="w-16 outline-0 border-2 rounded-md px-2"
                      type="number"
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <p>$650</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between my-4 mt-8">
                <button className="py-2 px-8 border border-gray-300 rounded-sm shadow font-poppins font-medium cursor-pointer hover:bg-secondary-2 hover:border-transparent hover:text-white duration-300">
                  Return To Shop
                </button>
                <button className="py-2 px-8 border border-gray-300 rounded-sm shadow font-poppins font-medium cursor-pointer hover:bg-secondary-2 hover:border-transparent hover:text-white duration-300">
                  Update Cart
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-16">
              <div className="flex items-center gap-5">
                <input
                  className="w-50 py-2 px-4 border border-gray-300 rounded-sm outline-0"
                  type="text"
                  placeholder="Coupon Code"
                />
                <CommonButton text={"Apply Coupon"} />
              </div>
              <div className="mb-12">
                <h4 className="mb-2">Cart Total</h4>
                <div className="flex justify-between w-100 py-3 border-b-2 border-gray-300">
                  <p>Subtotal</p>
                  <p>$1750</p>
                </div>
                <div className="flex justify-between w-100 py-3 border-b-2 border-gray-300">
                  <p>Subtotal</p>
                  <p>$1750</p>
                </div>
                <div className="flex justify-between w-100 py-3">
                  <p>Subtotal</p>
                  <p>$1750</p>
                </div>

                <div className="flex justify-center items-center mt-6">
                  <CommonButton text={"Procees to checkout"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopingCart;
