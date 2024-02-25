import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { useDispatch, useSelector } from "react-redux";
import formatTitle from "../utils/formatTitle";
import formatRupee from "../utils/fomatPrice";
import { TfiTrash } from "react-icons/tfi";
import { removeItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <MaxWidthWrapper>
      <div className="mt-12">
        <div className="flex flex-col justify-center items-center">
          {cartItems.length ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className=" flex justify-center items-center w-[80%] md:flex min-h-[200px] mt-6 border border-gray-100 rounded-md"
              >
                <div className="hidden  md:block md:flex-1 md:p-6">
                  <img
                    src={item.image}
                    className="h-[180px] w-auto"
                    alt=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className=" w-[40%]">
                  <p className="m-2 font-bold  text-gray-600">
                    {formatTitle(item.title, 40)}
                  </p>
                  <p className="hidden md:block md:m-2 md:text-gray-400">
                    {formatTitle(item.description, 80)}
                  </p>
                  <p className="m-4 font-bold text-xl text-gray-600">
                    {formatRupee(item.price)}
                  </p>
                  <div className="flex-col md:w-[90%] md:flex-row md:flex  md:justify-between">
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="mr-2 border border-gray-500  flex justify-center items-center w-[160px] h-8"
                    >
                      Remove <TfiTrash className="ml-2" />
                    </button>
                    <Link to={`/products/${item.id}`}>
                      <button className=" w-[160px]  md:mr-2 border border-gray-500  md:w-[250px] h-8">
                        Move to product
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your Cart is empty</p>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
