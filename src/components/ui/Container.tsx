import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-full max-w-[1280pc] flex justify-center items-center mx-auto">
      {children}
    </div>
  );
};

export default Container;
