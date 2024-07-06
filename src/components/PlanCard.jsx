import React from "react";

const PlanCard = ({ tagged_as, plan_name, cost_per_day }) => {
  const bgColor =
    plan_name == "PLUS"
      ? "#095B69"
      : plan_name == "PRO"
      ? "#FE992F"
      : plan_name == "BASIC"
      ? "#D8606D"
      : "#095B69";

  console.log(plan_name, "color");

  const obj = {
    PRO: "#FE992F",
  };

  return (
    <div className="p-2">
      <div
        style={{
          backgroundColor: bgColor,
        }}
        className={` w-full h-20 text-center border rounded-lg p-2`}
      >
        <div className="flex justify-end h-4">
          <span className="text-xs text-white"> {tagged_as}</span>
        </div>
        <div className="text-xl m-auto my-auto text-white">
          <h2>{plan_name}</h2>
        </div>

        <div>
          <p className="text-white text-xs">RS {cost_per_day}/DAY</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
