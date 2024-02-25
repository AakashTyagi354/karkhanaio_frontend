import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link } from "react-router-dom";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItem = useSelector((state) => state.cart.items);
  return (
    <MaxWidthWrapper className="h-14 sticky top-0 z-50 bg-white">
      <div className="flex h-full items-center justify-between border-b border-gray-200">
        <div className="text-2xl font-semibold">
          <Link to="/">karkhanaio</Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className=" p-2    border-r border-gray-200 ">
            <CiSearch
              size={24}
              className="cursor-pointer mr-2  text-gray-600 hover:text-gray-900"
            />
          </div>
          <div className=" p-2 relative border-r border-gray-200 mr-4  ">
            <Link to="/cart" className="cursor-pointer">
              <div className="text-white absolute rounded-full  bg-red-600 h-6 w-6 top-0 right-[5px] flex justify-center items-center">
                <p className="text-sm p-1">{cartItem.length}</p>
              </div>
              <CiShoppingCart
                className="cursor-pointer mr-2    hover:text-gray-900"
                size={24}
              />
            </Link>
          </div>
          <div className=" p-2   ">
            <CiUser
              className="cursor-pointer mr-2  text-gray-600 hover:text-gray-900"
              size={24}
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
