import AboutUsLanding from "@/Components/About/AboutUsLanding/AboutUsLanding";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { Space } from "antd";
import React from "react";
const About = (props) => {
  return (
    <Space direction="vertical">
      <section>
        <AboutUsLanding />
      </section>

      <section>
        <EndWord />
      </section>
    </Space>
  );
};

export default About;
