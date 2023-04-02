import Acheivments from "@/Components/Acheivements/Acheivments";
import Events from "@/Components/Events/Events";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { Space } from "antd";
import React from "react";
const Acheivements = (props) => {
  return (
    <Space direction="vertical">
      <Events />
      <EndWord />
    </Space>
  );
};

export default Acheivements;
