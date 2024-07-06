import React from "react";
import ImageCard from "./ImageCard";
import PlanCard from "./PlanCard";
import DescriptionCard from "./DescriptionCard";
import CheckListCard from "./CheckListCard";

const Card = ({ data }) => {
  console.log(data, "from card");
  return (
    <div className="">
      <ImageCard src={data?.banner} />

      <PlanCard
        tagged_as={data?.tagged_as}
        plan_name={data?.plan_name}
        cost_per_day={data?.cost_per_day}
      />


      <DescriptionCard claims = {data?.claims}/>


      <CheckListCard data_monthly = {data?.description?.data_monthly}         cost_per_day={data?.cost_per_day}
 />


    </div>
  );
};

export default Card;
