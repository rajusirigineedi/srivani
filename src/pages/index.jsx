import DirectorWords from "@/Components/Home/DirectorWords/DirectorWords";
import EndWord from "@/Components/Home/EndWord/EndWord";
import EventSection from "@/Components/Home/EventSection/EventSection";
import FeatureSection from "@/Components/Home/FeatureSection/FeatureSection";
import Landing from "@/Components/Home/Landing/Landing";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";
import { Space } from "antd";
import React from "react";
const Home = (props) => {
  return (
    <Space direction="vertical">
      <Landing />
      <EventSection />
      <DirectorWords />
      <FeatureSection />
      <Testimonials />
      <EndWord />
    </Space>
  );
};

export default Home;
