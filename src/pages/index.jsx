import EndWord from "@/Components/Home/EndWord/EndWord";
import Landing from "@/Components/Home/Landing/Landing";
import { Space } from "antd";
import React from "react";
const Home = (props) => {
  return (
    <Space direction="vertical">
      <section>
        <Landing />
      </section>
      <section>
        <EndWord />
      </section>
    </Space>
  );
};

export default Home;