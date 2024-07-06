import React from "react";

const DescriptionCard = ({ claims }) => {
  return (
    <div className="w-[90%] m-auto">
      <p className="font-bold p-2 ">{claims}</p>
    </div>
  );
};

export default DescriptionCard;
