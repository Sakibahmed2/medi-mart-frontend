import React from "react";
import { Container, Chip } from "@mui/material";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
import StockStatus from "@/components/ui/StockStatus";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type TParamsProps = {
  params: {
    productId: string;
  };
};

const SingleProductPage = async ({ params }: TParamsProps) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params.productId}`
  );
  const { data } = await res.json();

  console.log(data);

  const { _id, name, slug, description, price, discount, photo, stockStatus } =
    data;

  return (
    <Container>
      <div className="md:flex justify-center items-center w-full my-14 md:space-x-10 ">
        <div className="md:w-1/2  ">
          <Image
            src={photo}
            width={1000}
            height={1000}
            alt={name}
            className="rounded-xl border-2 drop-shadow-lg"
          />
        </div>

        <div className="md:w-1/2 mt-5 md:mt-0">
          <div className="flex items-center space-x-5">
            <h2 className="text-4xl font-semibold">{name}</h2>
            <Button variant="outlined" className="rounded-full">
              <FavoriteBorderIcon />
            </Button>
          </div>
          <p className=" text-gray-700 mt-5">{description}</p>

          <div className="mt-5 flex items-center">
            <p className="text-sky-500 font-semibold text-2xl">৳{price}</p>
            {discount ? (
              <Chip
                label={`${discount}% off`}
                color="warning"
                // variant="outlined"
                sx={{ fontSize: 20, ml: 2 }}
              />
            ) : (
              ""
            )}
            <div className="border-l-2 border-black ml-3 pl-2">
              <StockStatus stockStatus={stockStatus} />
            </div>
          </div>

          <div className="mt-5">
            {/* <Button>Buy now</Button> */}
            <Button
              className=" w-full rounded-full py-4 text-xl bg-sky-50"
              size="large"
              variant="outlined"
            >
              <ShoppingCartIcon />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
