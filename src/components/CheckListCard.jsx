import React from "react";

const CheckListCard = ({ data_monthly, cost_per_day }) => {
  return (
    <div>
      {data_monthly?.map((ele) => {
        return (
          <div className="flex items-center justify-center ">
            <div className="w-4">
              <img src="src\assets\Vector (1).png" className="w-4 h-4" />
            </div>
            <div className="w-[70%]">
              <p className="p-2">{ele?.text}</p>
            </div>
          </div>
        );
      })}

      <div>
        <div className="p-2">
          <div
            style={{
              backgroundColor: "#377E8B",
            }}
            className={` w-full h-16 text-center border rounded-[50px] p-2 flex items-center justify-center`}
          >
            <div>
              <p className="text-white">STARTS AT RS {cost_per_day}/DAY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckListCard;
