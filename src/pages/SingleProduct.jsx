import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";

const Horizontall = () => {
  return <hr className="w-[30%] my-2" />;
};

export default function SingleProduct() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      console.log("Fetching product");
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("ERROR IN FETCHING SINGLE PRODUCT");
      }
    };
    fetchProduct();
  }, []);

  const handleAddCart = () => {
    dispatch(addItemToCart(product));
  };
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <img className="h-[70%] mx-auto mt-12" src={product.image} alt="" />
        <div className="flex m-6 sm:mt-12  flex-col gap-1 text-slate-500 text-sm">
          <h2 className="text-3xl font-medium text-slate-700">
            {product.title}
          </h2>
          <div className="flex items-center gap-2">
            {product.rating && (
              <>
                <Rating value={product.rating.rate} readOnly />

                <div className="">{product.rating.count} reviews</div>
              </>
            )}
          </div>
          <Horizontall />
          <div className="text-justify">{product.description}</div>
          <Horizontall />
          <div>
            <span className="font-semibold">CATEGORY: </span>
            {product.category}
          </div>
          <Horizontall />

          <div>
            {isProductInCart(product.id) ? (
              <p>Already in cart</p>
            ) : (
              <button
                onClick={handleAddCart}
                className="h-[40px] w-[250px] bg-gray-500 text-white mt-6"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
