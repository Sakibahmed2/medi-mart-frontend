import React from "react";
import { Container } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import ProductCard from "../../ProductCard";

const BestSelling = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const { data } = await res.json();

  return (
    <Container>
      <div className="my-20">
        <SectionTitle title="Best selling" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {data?.slice(0, 4).map((item: TProduct) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BestSelling;
