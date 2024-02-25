import React from "react";
import homeimg from "../images/homepageimg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="flex">
      <div className="flex justify-center items-center min-h-screen sm:flex sm:items-center sm:flex-1">
        <div className="mb-16">
          <p className="text-4xl font-bold  ml-12 tracking-wider">
            Discover Your Next Favorite Thing at{" "}
            <span className="text-blue-700 text-4xl tracking-wider leading-[2px]">
              {" "}
              karkhanaio - Shop the Latest Trends Today!
            </span>
          </p>
          <p className="text-sm text-gray-500 ml-12 mt-4 tracking-wider">
            At karkhanaio, we curate the latest in fashion, technology, and
            lifestyle products, all in one convenient place. Explore our diverse
            selection and find exactly what you need to elevate your life. From
            cutting-edge gadgets to stylish apparel, we've got you covered.
            Start browsing now and experience the joy of discovery with every
            click!
          </p>
          <Link to="/products" className="flex">
            <button className=" mx-12  mt-8 flex border border-gray-500 w-[160px] h-[40px] pl-4 items-center font-bold tracking-wider">
              Products <FaArrowRightLong className="ml-2" size={24} />{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden sm:flex-1 sm:min-h-screen sm:flex sm:items-center sm:justify-center ">
        <img className="mb-36 w-full " src={homeimg} alt="" />
      </div>
    </div>
  );
}
