import bannerImg from "@/assets/banner-img.png";
import { Button } from "@mui/material";
import Image from "next/image";
import { Container } from "@mui/material";

const Banner = () => {
  return (
    <Container>
      <div className="md:flex justify-between items-center my-28 md:my-36 text-center md:text-start">
        <div className="mb-10 md:mb-0">
          <p className="primary-text-color">Premium quality</p>
          <p className="text-4xl md:text-6xl font-bold mt-1 mb-5">
            Your <span className="primary-text-color">health</span>, our
            priority at Medi Mart
          </p>
          <p className="text-gray-500">
            Discover a wide range of medical products and healthcare essentials
            at Medi Mart. Shop with confidence and convenience for all your
            health and wellness needs.
          </p>
          <Button sx={{ mt: 4 }}>Shop now</Button>
        </div>
        <div>
          <Image
            src={bannerImg}
            width={1000}
            height={1000}
            alt="banner image"
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
