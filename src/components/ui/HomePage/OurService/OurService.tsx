import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SecurityIcon from "@mui/icons-material/Security";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

const OurService = () => {
  return (
    <div className="bg-slate-100 py-12 mt-52 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-[1280px] mx-auto">
        <div className="md:flex text-center md:text-start justify-center items-center gap-4">
          <LocalShippingIcon
            sx={{
              color: "primary.main",
              fontSize: 60,
            }}
          />
          <div>
            <p className="text-xl font-bold">Free Shipping</p>
            <p className="text-gray-500">Free shipping world wide</p>
          </div>
        </div>

        <div className="md:flex text-center md:text-start justify-center items-center gap-4 ">
          <HeadsetMicIcon
            sx={{
              color: "primary.main",
              fontSize: 60,
            }}
          />
          <div>
            <p className="text-xl font-bold">Support 24/7</p>
            <p className="text-gray-500">Contact us 24 hours a day</p>
          </div>
        </div>

        <div className="md:flex text-center md:text-start justify-center items-center gap-4">
          <SecurityIcon
            sx={{
              color: "primary.main",
              fontSize: 60,
            }}
          />
          <div>
            <p className="text-xl font-bold">Secure payment</p>
            <p className="text-gray-500">100% payment protection</p>
          </div>
        </div>

        <div className="md:flex text-center md:text-start justify-center items-center gap-4">
          <AssignmentReturnIcon
            sx={{
              color: "primary.main",
              fontSize: 60,
            }}
          />
          <div>
            <p className="text-xl font-bold">Easy return</p>
            <p className="text-gray-500">Simple returns policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
