import CustomButton from "@/Components/CustomButton/CustomButton";
import React from "react";

const test = (props) => {
  return (
    <div style={{ width: "100%", height: "480px" }}>
      <h1>Test your components here..</h1>
      <h4>Button Component : </h4>
      <CustomButton text={"hellow"} />
    </div>
  );
};

export default test;
