import React from "react";
import AboutUsLanding from "@/Components/About/AboutUsLanding/AboutUsLanding";
import Acheivments from "@/Components/Acheivements/Acheivments";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { Space } from "antd";
import CampusComponent from "@/Components/Campus/Campus";
import DirectorWords from "@/Components/Home/DirectorWords/DirectorWords";

const Campus = (props) => {
  return (
    <Space direction="vertical">
      <CampusComponent />
      <DirectorWords />
      <EndWord />
    </Space>
  );
};

export default Campus;
