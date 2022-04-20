import React from "react";

const Capsule = ({ text }) => {
  return (
    <span className="rounded-2xl inline-block px-3 py-[2px] lg:px-6 lg:py-1 text-sm  bg-red-100">
      {text}
    </span>
  );
};

export default Capsule;
