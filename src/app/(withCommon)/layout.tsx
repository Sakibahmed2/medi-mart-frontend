import Footer from "@/components/sheard/Footer/Footer";
import MenuNavBar from "@/components/sheard/Navbar/Navbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <MenuNavBar />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
