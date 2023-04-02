import AboutUsLanding from "@/Components/About/AboutUsLanding/AboutUsLanding";
import EndWord from "@/Components/Home/EndWord/EndWord";
import FeatureSection from "@/Components/Home/FeatureSection/FeatureSection";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";
import { Space } from "antd";
import React from "react";
const About = (props) => {
  return (
    <Space direction="vertical">
      <AboutUsLanding />
      <FeatureSection />
      <Testimonials />
      <EndWord />
    </Space>
  );
};

export default About;
