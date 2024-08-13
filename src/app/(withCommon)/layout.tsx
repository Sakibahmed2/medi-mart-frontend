import MenuNavBar from "@/components/sheard/Navbar/Navbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <MenuNavBar />
      {children}
    </div>
  );
};

export default CommonLayout;
