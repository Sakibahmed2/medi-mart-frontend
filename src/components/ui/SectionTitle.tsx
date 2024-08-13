import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <p className="text-3xl md:text-4xl font-semibold">{title}</p>
      <p className="border-2 border-sky-500 w-full max-w-20 mt-2"></p>
    </div>
  );
};

export default SectionTitle;
