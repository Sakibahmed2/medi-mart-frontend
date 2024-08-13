"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ item }: { item: TProduct }) => {
  const { _id, name, slug, description, price, discount, photo } = item;

  return (
    <div className="relative flex flex-col mt-6 bg-gray-100 shadow-lg rounded-xl w-full max-w-96">
      <div className="h-full max-h-64 p-4 ">
        <Image
          src={photo}
          width={1000}
          height={1000}
          alt="product image"
          className="rounded-lg"
        />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-lg md:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h5>
        <p className="text-sky-500 font-semibold">৳{price}</p>
      </div>
      <div className="p-6 pt-0 md:flex justify-between items-center">
        <Button className="mb-2 md:mb-0">Add to cart</Button>
        <Link href={`/products/${_id}`}>
          <Button variant="outlined">Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
