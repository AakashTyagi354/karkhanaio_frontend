import React, { useEffect, useState, useCallback } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import axios from "axios";
import formatRupee from "../utils/fomatPrice";
import formatTitle from "../utils/formatTitle";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";

const MemoizedProduct = React.memo(
  ({ product, handleAddCart, isProductInCart }) => {
    return (
      <div
        key={product.id}
        className=" m-2 border border-gray-100  cursor-pointer p-6 rounded-lg  flex flex-col justify-between"
      >
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain mb-4"
          />
          <Rating
            className="mx-auto mt-2 "
            value={product.rating.rate}
            readOnly
          />
          <p className="text-lg mt-2 text-gray-600 font-semibold">
            {formatTitle(product.title, 22)}
          </p>
          <p className="text-sm text-gray-500 ">
            {formatTitle(product.description, 50)}
          </p>
          <p className="text-gray-700 mt-2 text-xl font-bold">
            {formatRupee(product.price)}
          </p>
        </Link>
        <button
          onClick={handleAddCart(product)}
          className={`bg-gray-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-700 transition duration-300 ${
            isProductInCart(product.id) ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isProductInCart(product.id)}
        >
          {isProductInCart(product.id) ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    );
  }
);

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (err) {
        console.log("ERROR IN FETCHING PRODUCTS");
      }
    };
    fetchProducts();
  }, []);

  const handleAddCart = useCallback(
    (product) => () => {
      dispatch(addItemToCart(product));
    },
    [dispatch]
  );

  const isProductInCart = useCallback(
    (productId) => {
      return cartItems.some((item) => item.id === productId);
    },
    [cartItems]
  );

  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {products.map((product) => (
          <MemoizedProduct
            key={product.id}
            product={product}
            handleAddCart={handleAddCart}
            isProductInCart={isProductInCart}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
