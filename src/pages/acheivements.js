import AboutUsLanding from "@/Components/About/AboutUsLanding/AboutUsLanding";
import Acheivments from "@/Components/Acheivements/Acheivments";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { Space } from "antd";
import React from "react";
const Acheivements = (props) => {
  return (
    <Space direction="vertical">
      <section>
        <Acheivments />
      </section>

      <section>
        <EndWord />
      </section>
    </Space>
  );
};

export default Acheivements;
